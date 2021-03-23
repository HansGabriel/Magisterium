# Magisterium
Guiding the learners today, to form the innovators of tomorrow.

![Main][Main_Page]

[Magisterium Web App - Running Demo](https://magistrum-308411.et.r.appspot.com/)

## Table of contents
* [General info](#general-info)
* [Setup Web App](#setup_web_app)
* [How to use](#how-to-tuse)

## General info
This project is composed of two parts: The Mobile App built using Flutter and Firebase, and the
Web App built uisng React, Node.js, and MongoDB and deployed using the Google Cloud Platform.

## Setup Web App
To run this project, make sure you have npm installed and perhaps installed react client as well. Also, since this is built using the NoSQL database, MongoDB, provision a database on MongoDB Atlas (https://www.mongodb.com/cloud/atlas) or by install MongoDB in your local machine. Follow the tutorial by installing MongoDB Compass (https://docs.mongodb.com/guides/server/install/).

```
$ git clone https://github.com/HansGabriel/Magisterium.git
$ cd Magisterium
$ npm install
$ cd client
$ npm install 
$ npm run build
$ cd ..
$ npm run start
```

The following instructions will open the app 


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