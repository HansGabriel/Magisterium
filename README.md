# Magisterium
Guiding the learners today, to form the innovators of tomorrow.

![Main][Main_Page]

[Magisterium Web App - Running Demo](https://magistrum-308411.et.r.appspot.com/)

## Table of contents
* [General info](#general-info)
* [Mobile App Tech](#mobile-app-tech)
* [Web App Tech](#web-app-tech)
* [Setup Mobile App](#setup-mobile-app)
* [Setup Web App](#setup-web-app)
* [How to use](#how-to-tuse)

## General info
This project is composed of two parts: The Mobile App built using Flutter and Firebase, and the
Web App built using React, Node.js, and MongoDB and deployed using the Google Cloud Platform.
Here are the following features of the app:

- Sign Up as a tutor or as a student
- Online booking of tutors by students
- Choose your time, duration, and mode of meetup (online)
- ✨Easy, Affordable, and Convenient ✨

## Mobile App Tech
- [Flutter] - 💯 Software Framework for building ios and android apps in one source code! 
- [Android Studio] - 🤖 For creating an Android Phone Emulator
- [Firebase] - 🔥 Google's Backend Framework for making server side development easier (no complex code)
- [Express] - 🎉 fast node.js network app framework (used in the server side of the web app)

## Web App Tech
- [MongoDB] - 🌱 Google's NoSQL database for quering json-like data responses
- [Express] - 🎉 fast node.js network app framework 
- [React] - ⚛️ Frontend Framework using javascript 
- [Node.js] - 🧠 server side scripting using javascript  

## Setup Moble App
In my case, I've developed in an android emulator by downloading Android Studio (https://developer.android.com/studio). Although it's also possible to use an ios emulator if you're using a mac via XCode (https://apps.apple.com/us/app/xcode/id497799835?mt=12). Furthermore, once you're done setting up your emulator or an actual physical device, then follow the setup below to run the flutter app. Also make sure you have flutter installed (https://flutter.dev/docs/get-started/install).

Since this is connected to a firebase client, we need to get the **configuration file** from firebase. Follow the process below:

1.) Go to https://console.firebase.google.com/
2.) Select your project
3.) On the left menu, click on settings > project settings
4.) Add an app or download the google-services.json file under the *Your Apps* section.
5.) Copy the **google-services.json** to the following path *android/app* if android or ios depending on your emulator. (not sure for ios, just follow the instructions in firebase)


## Setup Web App
To run this project, make sure you have npm installed and perhaps installed react client as well. Also, since this is built using the NoSQL database, MongoDB, provision a database on MongoDB Atlas (https://www.mongodb.com/cloud/atlas) or by install MongoDB in your local machine. Follow the tutorial by installing MongoDB Compass (https://docs.mongodb.com/guides/server/install/).

Before you try to run the app, make sure you set up the following environment variables to ensure you're connected to your database. So first create a ==**.env**== file in the root of your web app directory. 

Then add the following by replacing the caps texts with actual values.

```sh
MONGO_URI=
SESSION_SECRET=
SECRET_OR_KEY=
saltRounds=
NODE_ENV=
```

`SESSION_SECRET and SECRET_OR_KEY` are strings of your choice (with no quotes), `saltRounds` is an integer (preferably between 5 to 15 exclusive) and `NODE_ENV` may be either **development** or **production**

After setting up your **.env** file, you can proceed with the commands below.

```sh
$ git clone https://github.com/HansGabriel/Magisterium.git
$ cd MagisteriumWebApp
$ npm install
$ cd client
$ npm install 
$ npm run build
$ cd ..
$ npm run start
```

The following instructions will open the app. You can type [localhost:8080](localhost.8080) in your favorite browser to start using the app. 

```sh
127.0.0.1:8000
```

or 

```sh
localhost:8000
```


## How to use

1.) **Login Page**

The app opens up with the login page and prompts the user to enter their email/username and their password.

![Login][Login]


2.) **Sign Up**

In case you don't have an account yet, you may sign up by providing your email, username, and password.

![SignUp][SignUp]

3.) **Main Page**

After logging in, you get it your main page and you can start browsing for tutors or coaches. There are a variety or options and you can filter based on the subjects. 

![Main][Main_Page]


4.) **Details**

If you click one of the buttons, you can look at the details and the profile of the coach that you are looking for as well as the price.

![Details][Details]

5.) **Info**

Similarly, you can also look at their background information and bio to know more about the tutor you're interested in,

![Info][Info]

6.) **Review**

You can also check the reviews and ratings of other people on that specific tutor to know about her/his quality.

![Review][Review]

7.) **Book**

Lastly, you can book the tutor and and you can schedule the number of hours for you to meet with him/her.

![Book][Book]



 
[Main_Page]:
https://github.com/HansGabriel/Magister/blob/main/images/main.png
[Details]:
https://github.com/HansGabriel/Magister/blob/main/images/details.png
[Info]:
https://github.com/HansGabriel/Magister/blob/main/images/info.png
[Login]:
https://github.com/HansGabriel/Magister/blob/main/images/login.png
[Review]:
https://github.com/HansGabriel/Magister/blob/main/images/review.png
[SignUp]:
https://github.com/HansGabriel/Magister/blob/main/images/signup.png
[Book]:
https://github.com/HansGabriel/Magister/blob/main/images/book.png