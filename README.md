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

![PetsEverywhere Demo](https://media.giphy.com/media/dBgRK8pSKQL0fBITna/giphy.gif)

## Technology Used

- [React](https://github.com/hanhngooo/PetsEverywhere--client/blob/development/src/App.js)
- [Redux](https://github.com/hanhngooo/PetsEverywhere--client/tree/development/src/store)
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [Express](https://github.com/hanhngooo/PetsEverywhere-server/blob/development/index.js)
  - [Rest API](https://github.com/hanhngooo/PetsEverywhere-server/tree/development/routers)
- [Sequelize](https://github.com/hanhngooo/PetsEverywhere-server/tree/development/models)
- [Cloudinary](https://github.com/hanhngooo/PetsEverywhere-server/blob/development/config/cloudinary.js)

## Goals of this project

The goal of this project is to learn team collaboration while building an app

- Practice full-stack development
- Usage of what we learned in the bootcamp
- Planning the project features by creating a mock wireframe, user stories
- Practice disciplined git usage like proper commits & branching
- Practice merging of feature branches in git while resolving conflicts (if any)

## User stories

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

  - As a user, I want to be able to search for people's accounts to see their profiles

    - Search bar on Navbar
    - Auto suggestions of matched inputs

  - As a user, I want to be able to see and interact with only one post when I click on a post.
    - A modal page with seperate URL link to specific post
    - Display of user name + avatar
    - Caption
    - Like button + Comment form
    - List of Comment

This mvp is still a work in progress. Some features still need to be implemented and revised.

## Git Workflow

- Seperate features by branches
- Regular commit with messages
- Pull requests with summaries
- Used development branch as default

## How this app was built

- [Logged-in user profile page](https://github.com/hanhngooo/PetsEverywhere--client/pull/1)
- [Posts in Homepage](https://github.com/hanhngooo/PetsEverywhere--client/pull/2)
- [Profile Page Different Id](https://github.com/hanhngooo/PetsEverywhere--client/pull/5)
- [Detail Post Modal Page](https://github.com/hanhngooo/PetsEverywhere--client/pull/6)
- [Add Styling](https://github.com/hanhngooo/PetsEverywhere--client/pull/8)

## Server Repo

- The server side of this project is an Express server connected to a Sequelize database. [Click here for server repo](https://github.com/hanhngooo/PetsEverywhere-server)

## How to Install this?

- clone the app
- cd into your project
- Install dependencies using `npm install`
- start development server using `npm run start`
