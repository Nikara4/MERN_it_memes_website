# IT Memes World & Memes Generator

IT Memes World is a website providing you with the best memes from IT industry. You can create your own account, add new memes, edit or delete them and like/dislike posts. Future development of the app involves a gallery of all memes, meme generator and weekly subscription. See below for more information, changes in code and deployment updates.

Live view: [IT Memes World](https://itmemesworld.netlify.app/)

![IT Memes World](https://i.ibb.co/mDCc6k2/it-memes-world.png)

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Libraries](#libraries)
- [Features](#features)
- [Status](#status)
- [Planned implementations](#planned-implementations)
- [Updates](#updates)
- [Inspiration](#inspiration)

## General info

The project has been created as part of my 'Szkoła Reacta' course and has later been extended with new technologies. The scope of the course is to use what I have learned during the course about React, API, Next.js, etc. Full list of used technologies, languages and libraries you will find below.

For now the project is completed in the basic stage, which makes it usable and available for others. Full list of planned updates and functions is below.

## Technologies

- HTML 5
- CSS, Sass
- React, JavaScript, JSX, TypeScript
- Node.js
- Material UI
- Redux
- MongoDB database

## Libraries used

- axios
- jwt-decode
- moment
- react-file-base64
- redux, react-redux, redux-thunk
- uuid
- bcryptjs
- body-parser
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- passport
- nodemon

## Features

The project is designed for desktop and mobile versions.

## Status

Project is: completed in basic project.

For now the live preview shows a basic version of a Random Meme Generator. The user can insert their own captions and they will be visible alongside the meme generated. It is a simple application with flaws (the pictures are of different shapes and sizes and they sometimes render incorrectly).

COMPLETED:

- basic components of the Meme Generator,
- basic implementation of styles,
- working JS code,
- backend for handling posts and authentication,
- MongoDB connection,
- creating user accounts,
- upload of memes, deletion and liking/disliking as a logged in user,
- final fixes with mobile views, 
- **information dialogs**: creating client side information dialogs/snackbars for success/info/warning/error informations from the backend,
- **refactor of all dialogs and forms**.

## Planned implementations

The following are planned to be implemented:

- **pagination**: separating the amount of visible posts and creating pages,
- **search engine**: searching through tags,
- **comments section**: comments will be available for logged in users; the post will show itself in a lightbox window with a comments section
- **gallery**: a full gallery like view of all memes with lightbox,
- **generator**: meme generator from blank pictures available in the database (or uploaded by the user)/ a generated meme can be either uploaded to the site or downloaded for private use,
- **weekly subscription**: everyone who signs up for the subscription will receive weekly emails with new uploads,
- how to instructions.

## Updates

**<ins>Update 06/06/2022<ins>** refactor of dialog forms / disabling like/dislike functionality for creators under their posts

**<ins>Update 03/06/2022<ins>** deployment after fixes / created client side information dialogs/snackbars for informations from the backend; refactor of Auth and Edit forms

**<ins>Update 26/05/2022<ins>** deployment after fixes / final fixes with mobile views

**<ins>Update 23/05/2022<ins>** second deployment after fixes / fix of re-render of page after login/implementation passport-jwt strategy with refactor

**<ins>Update 20/05/2022<ins>** first deployment / merge of working branch with main

## Inspiration

The project has been inspired by a few Meme Generator apps that have been created:
AnjaliSharma1234 [Random Meme Generator](https://github.com/AnjaliSharma1234/Random-meme-generator)
lijinke666 [react-meme-generator](https://github.com/lijinke666/react-meme-generator)

I have also googled some tutorials and React project ideas:
[10 Cool React Projects Ideas You Should Build In 2021](https://hackr.io/blog/react-projects#project-overview-6)
[Learn React by Building a Meme Generator](https://www.freecodecamp.org/news/learn-react-by-building-a-meme-generator/)
