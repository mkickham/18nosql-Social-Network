# 18nosql-Social-Network

## Table of Contents:
- [Description](#description)
- [GitHub Repo](#github-repository)
- [Video Walkthrough](#video-walkthrough)
- [Criteria](#criteria)

## Description

This is a Node.js application that allows users to check the backend functioning of a potential social media platform using a NoSQL database. The models include a user model as well as models for 'reactions' and 'thoughts'. This application allows for the creation and deletion of users, posting, editing, and deleting of posts or 'thoughts' and reactions to those thoughts. There are also routes to add or delete users as friends. 

## GitHub Repository

Here is a link to the [GitHub repository](https://github.com/mkickham/18nosql-Social-Network)

## Video Walkthrough

Here is a link to the [Screencastify video walkthrough](https://app.screencastify.com/v3/watch/HrkCdw95GXxdgWp2Nn8d)

## Criteria

The following is the User Story and Acceptance Criteria provided by Washington University EdX camp

User Story:
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

Acceptance Criteria:
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```