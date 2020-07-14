## :alien: Introduction

Hi, I am Hanh Ngo, a newbie but enthusiastic in web developing. PETSEVERYWHERE is my portfolio project. This is a MVP with the basic features implemented, the project is in progress.

## :dog: PETSEVERYWHERE :cat:

The country I come from is a developing country where animal welfare is not yet well cared and educated by the majority. With the increasing use of social media, I have witnessed the rise of awareness/ love from people to animals/pets even though lots of cats and dogs are still suffering everyday by being killed for meat, abandoned and abused. This issue has inspired me to create this app with the aim of providing a unique platform where people can represent their own pets to show case their daily life moments/stories or any capturings of funny animals they want to share to the world and educate people. The app is meant to be purely for animals related content.

## Contents

- [App Demo](https://github.com/hanhngooo/PetsEverywhere--client#App-Demo)
- [Technology Used](https://github.com/hanhngooo/PetsEverywhere--client#technology-used)
- [Goals of this project](https://github.com/hanhngooo/PetsEverywhere--client#goals-of-this-project)
- [User stories](https://github.com/hanhngooo/PetsEverywhere--client#user-stories)
- [Git Workflow](https://github.com/hanhngooo/PetsEverywhere--client#git-workflow)
- [Server Repo](https://github.com/hanhngooo/PetsEverywhere--client#server-repo)

## App Demo

to be added

## Technology Used

- [React]()
- [Redux]()
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [Express]()
  - [Rest API]()
- [Sequelize]()
- [Cloudinary]()

## Goals of this project

The goal of this project is to learn team collaboration while building an app

- Practice full-stack development
- Usage of what we learned in the bootcamp
- Planning the project features by creating a mock wireframe, user stories
- Practice disciplined git usage like proper commits & branching
- Practice merging of feature branches in git while resolving conflicts (if any)

## User stories and Wireframe

- User Stories

  - As a user, I need to have my own profile page that displays all my animal posts.

    - A button which opens up a popup box to post new photo/ video
    - List of all posts with number of likes and comments
    - A description of the user.
    - A button to edit the description and change profile picture
    - User should be able to see and use these button only after Login/SignUp

  - As a user, I want to post my pet's photo and add caption to it

    - A popup form to add photo file, an input field to add caption
    - A preview for the photo
    - A button to post, photo will be uploaded to Cloudinary account

  - As a user, I want to have a homepage which displays all posts from other's users

    - A button to like the post
    - A form to add comment
    - List of comments
    - Click on user name links to user's profile

This mvp is still a work in progress. Some features still need to be implemented and revised.

## Git Workflow

In this project I try to use:

- Good commit messages
- Named branches
- Pull requests with proper summaries
- Used development branch without merging to the master all-time

## How this app was built

- [Logged-in user profile page](https://github.com/hanhngooo/PetsEverywhere--client/pull/1)
- [Posts in Hompage](https://github.com/hanhngooo/PetsEverywhere--client/pull/2)
- [Add Styling](https://github.com/hanhngooo/PetsEverywhere--client/pull/3)
- [Profile Page Different Id](https://github.com/hanhngooo/PetsEverywhere--client/pull/5)

## Server Repo

- The server side of this project is an Express server connected to a Sequelize database. [Click here for server repo](https://github.com/hanhngooo/PetsEverywhere-server)

## How to Install this?

- clone the app
- cd into your project
- Install dependencies using `npm install`
- start development server using `npm run start`
