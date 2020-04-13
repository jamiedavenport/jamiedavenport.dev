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

## Auth0 Setup
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

## Protecting API Routes
To protect our endpoints from unauthorized access we need to set up a custom authorizer for API gateway. You can read more about how these work on the official AWS documentation but the TL;DR is this:
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

The `auth0.Parser` object is responsible for parsing and validating the user's bearer token. You should replace the values used here with your own that we created earlier.

[BOOKMARK]

https://gist.github.com/jamiedavenport/7dbafe98542174220130d5f478078ba2
Let's break down the key parts of this policy:
Action: []string{"execute-api:Invoke"} describes what the user can do, in our use-case we want authorised users to invoke APIs.
Effect: effect will be either Allow or Deny depending on if we want to permit access or prevent it.
Resource: []string{"arn:aws:execute-api:eu-west-2:<ACCOUNT_ID>:<API_ID>/*"} is what the action and effect relate to. This could be a specific API route but in this case we'll allow access to the entire API. Note that the values for ACCOUNT_ID and API_ID can be found in the AWS console.
By default, the Serverless Golang templates come with a Makefile which contains targets for building and deploying our code. Whatever way you are managing this just remember to actually include the authorizer in the build process, for me this means modifying the build target:

[SNIPPET]

Finally, we need to update our serverless.yml file to deploy our new authorizer lambda and configure our protected routes to use it:
https://gist.github.com/jamiedavenport/31b862218f396e67cccde2fc3464b2ec
To test that this is working you need to obtain a valid access token. In a final product, this would be handled by the frontend application but to quickly test this is working we can get one from the Auth0 console. Navigate to your API and then to the Test tab, there should be a valid access token that you can simply copy and use.
The following cURL commands can be used to verify that it works as expected:
$ curl -I --location --request GET '<https://vmlk9hzwt9.execute-api.eu-west-2.amazonaws.com/dev/hello>'
HTTP/2 401
content-type: application/json
...

$ curl -I --location --request GET '<https://vmlk9hzwt9.execute-api.eu-west-2.amazonaws.com/dev/hello>' -H 'Authorization: Bearer <TOKEN>'
HTTP/2 200
content-type: application/json
...
