Jesus Marin's React Test
======


## How to run the app

To build the app, first install everything with **npm install** and then run
>**npm run build**

in the terminal
___

To Actually start the server and be able to see the app working, run
> **npm run start**

in the terminal. It will be available in http://localhost:3000/

___
___
## What is this:
This repository contains the source code for the todo app for the React test

### Things that I used

#### React
Firstly, I used ReactJS because that's what the test was supposed to be about: React.

#### Webpack
After that, to build a todo app all that was needed was just a basic webpack configuration to bundle everything. I transpiled/compiled the code with Babel and opted to use the *transform-object-rest-spread* babel plugin because it makes mapping objects way easier.

#### ExpressJS
To set up a quick server that whoever downloads this todo app can run easily, I used Express and just made a short script that serves the static files needed for the application to run locally in port 3000

#### Git
Version control


#### Why not use Redux/other stuff/etc
For a simple todo app there was no need to use any other thing, really! State can perfectly be managed with the components' own state here as there wasn't much state going around and, if anything, for a project of this size using more than the basic stuff could actually have been detrimental to the goal of finishing the test in time.



> Use the force, Luke.
