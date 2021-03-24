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
* [How to use the Mobile App](#how-to-use-mobile-app)
* [How to use the Web App](#how-to-use-web-app)

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

## Setup Mobile App
In my case, I've developed in an android emulator by downloading Android Studio (https://developer.android.com/studio). Although it's also possible to use an ios emulator if you're using a mac via XCode (https://apps.apple.com/us/app/xcode/id497799835?mt=12). Furthermore, once you're done setting up your emulator or an actual physical device, then follow the setup below to run the flutter app. Also make sure you have flutter installed (https://flutter.dev/docs/get-started/install).Here's how to install:


```sh
$ git clone https://github.com/HansGabriel/Magisterium.git
$ cd MagisteriumMobileApp
$ flutter clean
$ flutter pub get
```

Since this is connected to a firebase client, we need to get the **configuration file** from firebase. Follow the process below:

1. Go to https://console.firebase.google.com/
2. Select your project
3. On the left menu, click on settings > project settings
4. Add an app or download the google-services.json file under the *Your Apps* section.
5. Copy the **google-services.json** to the following path *android/app* if android or ios depending on your emulator. (not sure for ios, just follow the instructions in firebase)


After doing so, you can run the app on your favorite emulator or physical mobile phone.

```sh
$ flutter pub run
```


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


## How to use the Mobile App

![Template1][Template1]

The mobile app for this hackathon is only accessible for students as there is no signing up for tutors functionality (wasn't able to finish up the whole functionality for this time period 😢). Anyways the mobile app allows students to Sign In or Register and directly find the tutor they want and book them. Booking is as simple as giving your time details and adding a 💌 message to the 👨‍🏫 tutor.

![Template2][Template2]

This mobile app was built using Flutter as it is easy to make designs and functionalities plus the advantage of doing a cross platform to 🍎 ios and 🤖 android makes it a great framework for mobile development. Also 🔥 firebase was used to supply the backend details and the app is also connected to the express server of the web app to fetch API's 📶.

![Template3][Template3]

Although this app works already, we unfortunately can't deploy it since the process for launching a mobile app requires 💸 payments and needs to ✅ verified after a long process. Anyways, we will show a demo of the mobile app in a video.


## How to use the Web App

The app can be divided into three categories: **Students**, **Tutors**, and **Admins**. Users can sign up as students and find the right tutor for them by sorting them by *Subject*, *Degree*, or *Availability*. Students can also provide their profiles and details for their booking like: *Duration*, *Subject*, *Time*, etc...

For **Tutors**, they can register via the `Register As Tutor`, and provide their credentials and other details. They specify their majors and minors as well as their time of availability, subject strengths, etc...

Lastly we created an **Admin** category for employees of the company to edit subjects and as well as profiles and users. This is to ensure that any activity is legal and would only involve booking for tutors. 

1.) **Login Page**

🧑‍💻 The app opens up with the login page and prompts the user to enter their email/username and their password.

![Login][Login]


2.) 🔱 **Register As Student**

As mentioned, users may opt to register as students to find and book the right tutor.

![RegisterStudent][RegisterStudent]

3.) ⚜️ **Register As Tutor**

Similarly, if you want to teach as a tutor, you can register as one then provide you details.

![RegisterTutor][RegisterTutor]


4.) 💻 **Dashboard**

Whether you're a student or tutor, you will have access to your own dashboard and you can provide details. For students, simple ones like school and grade are enough. For tutors, you must provide your attainment and other details to show you are really a qualified tutor. 

![Dashboard][Dashboard]

5.) 🖥️ **Side Panel**

There is also a neat side bar that allows you to navigate between pages such as **Profile**, **Booking**, **Appointments**, and **Logout** 

![SidePanel][SidePanel]

6.) ⌨️ **Book**

As a student you can search for tutors via the **Booking Page** and you with the search and tagging option, you can lower your options and find the best fit for you. 

![Book][Book]

7.) 💾 **BookDetails**

Once you have chosen your tutor, you can book him/her and provide details such as **Duration**, **Meetup (Online/Location)**, **Time**, and **Subject** so that the tutor knows what he/she should prepare.

![BookDetails][BookDetails]



 
[Main_Page]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg12.png
[Dashboard]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg9.png
[SidePanel]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg6.png
[Login]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg4.png
[Book]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg7.png
[RegisterStudent]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg5.png
[RegisterTutor]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg11.png
[BookDetails]:
https://github.com/HansGabriel/Magisterium/blob/main/media/mg8.png
[Template1]:
https://github.com/HansGabriel/Magisterium/blob/main/media/template1.png
[Template2]:
https://github.com/HansGabriel/Magisterium/blob/main/media/template2.png
[Template3]:
https://github.com/HansGabriel/Magisterium/blob/main/media/template3.png