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

* [Serverless Framework Quickstart](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
* [Serverless Go Example](https://serverless.com/framework/docs/providers/aws/examples/hello-world/go/)

A good starting spot is to have an example lambda function deployed into AWS. Most of the Serverless templates will already have some written for you.

<img src="/assets/serverless-starting-point.png" alt="Starting Point" />
