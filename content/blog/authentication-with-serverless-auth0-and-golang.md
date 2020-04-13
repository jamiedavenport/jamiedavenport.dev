---
path: serverless-auth0-golang
date: 2020-04-13T13:30:06.111Z
title: 'Authentication with Serverless, Auth0 and Golang'
description: >-
  Quickly set up a Serverless Framework and Golang stack with Auth0
  authentication
---
<img src="/assets/building-serverless-with-the-golang-gopher.png" alt="Building with the Golang Gopher" />

Before we get started with the tutorial I want to give a bit of context about myself to help you understand the value I get from using this tech stack. Like most Software Engineers my personal projects fall into one of two classes:

1. Examples that I build while learning something new
1. Tools that solve my real-life problems

This tech stack applies to the second group of projects, the ones where you want to start writing the business logic ASAP.

AWS, Serverless Framework and Auth0 are excellent solutions in this field because of their low running cost and fast lead time for new features. I use Golang because I'm familiar with it, there are other benefits such as static analysis and small final binary but I would suggest using whatever language you are most comfortable with. A popular choice is NodeJS which already has amazing tooling and documentation courtesy of its large community.

For those who like to just get stuck in with the code, you can find the finished product <a href="https://github.com/jamiedavenport/demo-serverless-go-auth0" target="_blank" rel="noopener noreferrer">here</a>.

## Prerequisites

I won't cover all of the setup required here but before getting started please ensure you have a Golang Serverless project set up and access to Auth0 and AWS accounts.

* <a href="https://serverless.com/framework/docs/providers/aws/guide/quick-start/" target="_blank" rel="noopener noreferrer">Serverless Framework Quickstart</a>
* <a href="https://serverless.com/framework/docs/providers/aws/examples/hello-world/go/" target="_blank" rel="noopener noreferrer">Serverless Go Example</a>

A good starting point is to have an example lambda function deployed into AWS. Most of the Serverless templates will already have some written for you.

<img src="/assets/serverless-starting-point.png" alt="Starting Point" />

## Auth0 setup
We need to tell Auth0 about our API and in return get some identifiers that we'll use to handle user authentication:

1. In the <a href="https://manage.auth0.com/#/apis" target="_blank" rel="noopener noreferrer">APIs</a> section of the Auth0 dashboard, click Create API.
1. Provide a name and an identifier for your API. The identifier should be something unique, in my case I've used `https://demo-serverless-go-auth0.jamiedavenport.dev`.

<img src="/assets/auth0-create-api.png" alt="Auth0 API Setup" />

Before moving on we need to make a note of two pieces of information:
1. The identifier that you used when creating the API.
1. Your tenant domain, which depends on the region you specified at creation:
   * For the US: `https://YOUR-TENANT-NAME.auth0.com`
   * For Europe: `https://YOUR-TENANT-NAME.eu.auth0.com`
   * For Australia: `https://YOUR-TENANT-NAME.au.auth0.com`

## Protecting API routes

To protect our endpoints from unauthorized access we need to set up a custom authorizer for API Gateway. You can read more about how these work on the official AWS documentation but the TL;DR is this:
* A custom authorizer is simply a lambda function that either grants or denies access to a resource.
* API Gateway calls your authorizer to determine access to the protected lambda.
* If access is granted then API Gateway caches the response for future requests (more on this later).

To make the process even easier I've created an open-source library that handles parsing and validation of Auth0 bearer tokens: <a href="https://github.com/jamiedavenport/go-auth0-jwt" target="_blank" rel="noopener noreferrer">go-auth0-jwt</a>.

First, we need to install our dependencies:
```bash
go get github.com/jamiedavenport/go-auth0-jwt
```

Next, create a new lambda function that will be used as our custom authorizer:

<script src="https://gist.github.com/jamiedavenport/2b3a410d0e355bb583d4d1a525bf79a7.js"></script>


Let's take a closer look at what's happening here:

```go
tokenString, err := tokenFromRequest(req)
```

We expect that the token will be formatted as `Bearer <token>` so we first extract the token using the `tokenFromRequest` helper method.


```go
a := auth0.Parser{
	Audience: "https://demo-serverless-go-auth0.jamiedavenport.dev",
	Domain:   "https://demo-serverless-go-auth0.eu.auth0.com/",
}
token, err := a.Parse(tokenString)

```

The `auth0.Parser` object is responsible for parsing and validating the user's bearer token. You should replace the values here with your own that we created earlier.

The authorizer should return a policy document that describes the permissions granted to the user (assuming they are granted access).

<script src="https://gist.github.com/jamiedavenport/7dbafe98542174220130d5f478078ba2.js"></script>

The `Action` describes what the user can do, the `Effect` will be either `Allow` or `Deny` depending of wether we want to permit access or prevent it and `Resource` is that what resources the policy applies to.

The resources are a list of AWS ARNs. Here I've used the ARN for the entire API which looks like `arn:aws:execute-api:eu-west-2:<ACCOUNT_ID>:<API_ID>/*`. You can find your values for `ACCOUNT_ID` and `API_ID` in the AWS console. Finer-grained access control is possible but there are some caveats that we'll discuss later on.

By default, the Serverless Golang templates come with a `Makefile` which contains targets for building and deploying our code. Whatever way you are managing this just remember to actually include the authorizer in the build process, for me this means modifying the build target:

```makefile
build: gomodgen
	export GO111MODULE=on
	env GOOS=linux go build -ldflags="-s -w" -o bin/hello ./hello
	env GOOS=linux go build -ldflags="-s -w" -o bin/authorizer ./authorizer
```

Finally, we need to update our serverless.yml file to deploy our new authorizer lambda and configure our protected routes to use it:

<script src="https://gist.github.com/jamiedavenport/31b862218f396e67cccde2fc3464b2ec.js"></script>

To test that this is working you need to obtain a valid access token. In a final product, this would be handled by the frontend application but to quickly test that this is working we can get one from the Auth0 console. Navigate to your API and then to the Test tab, there should be a valid access token that you can simply copy and use.

<img src="/assets/auth0-test-access-token.png" alt="Auth0 Test Access Token" />

The following cURL commands can be used to verify that it works as expected:
```bash
$ curl -I --location --request GET 'https://<API ENDPOINT>/dev/hello'
HTTP/2 401
content-type: application/json
...

$ curl -I --location --request GET 'https://<API ENDPOINT>/dev/hello' -H 'Authorization: Bearer <TOKEN>'
HTTP/2 200
content-type: application/json
...
```

## Getting the user ID

API Gateway makes it very easy to access the user ID from within an API lambda function. Context from the authorizer is passed through and among other things contains the `principalId`.

<script src="https://gist.github.com/jamiedavenport/c98344bea12ed55e9d581a939c9ffcea.js"></script>

## Policy caching

Earlier on I mentioned that API Gateway caches the policies returned by your authorizer. Great! Caching is good for performance etc. Looking back at the policy generated, it applies to the entire API, in other words, if you are authorized then you can call any API method.

This works for my applications and will probably be fine for your use-case but to see the catch we need to think about finer-grained access control. The `req` parameter for the authorizer contains a `MethodArn` field which is the identifier for the specific method you're trying to call. If we replace the resource with this then we have a policy that allows access only to that specific method. See the problem yet?

<script src="https://gist.github.com/jamiedavenport/5a1bd6a79e9f8da7fe6fcf1fa1e484c7.js"></script>

If the TTL on our API Gateway authorizer cache is 5 minutes then during that time the user can only call that method. Users don't normally enjoy waiting 5 minutes between accepting a friend request and then sending a message to that friend, however, we have a few options available to us:

* Give users access to all resources they might ever need.

This is the approach I've used because it's simple but not without flaws. If users aren't meant to access all API routes then the authoirzer needs to know which ones to grant access to.

* Disable caching so that a new policy is generated on each request.

This will solve the problem but will introduce additional latency on to every request. Avoid this approach if you can!

* Move authentication logic into each lambda function.

There's no rule that states that authentication logic has to be stored within an authorizer. This approach will remove the additional network latency that occurs when making multiple lambda calls but you'll lose other benefits of custom authorizers such as controlling access to other AWS resources.


