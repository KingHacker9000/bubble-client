# Bubble-Server
This is the Backend Server For Bubble Project

# Bubble
> A Cross Platform React Native Application (Expo) Built using Javascript.
> The Application Keeps tracks of students within school property
> It has a Python Flask Backend Server: [Bubble Website](https://serverbubble.herokuapp.com/)

### Video Demo:  
[Bubble App Demo Video](https://youtu.be/WQVlMmGz1a4)

## Description:

#### What will your software do? What features will it have? 
> Bubble Acts as an online register, that keeps track of students, within school property
> It helps maintain safety protocols during pandemics or other epidemics. It essentially functions as creating a sort of bubble
> in which students are assigned to their bubble (ie their class), so in case of a disease breakout, it ensures a much safer and
> practical method of keeping the students safe and avoiding furthur spread of contagious diseases, the teachers can use the app, 
> to track the students, and make sure that a purticular room isnt crowded so that social distancing protocols aren't endangered.
> it has an tracer sheet for each classroom that can be accessed by the class teacher, and the admin.

#### How will it be executed?
It will be used by class teachers to track when a student goes outside the class (Bubble).

#### What Did We Use to Build the Project?
For this application we have used a Flask App using Python as a Backend, and React Native App as a Frontend

## Getting Started

### Frontend:
#### Installations
Download and Setup Node and npm From the official Website
Use npm to install expo globally: `npm install -g exp`

#### Getting the files
Clone the repo using git and cd into the directory
alternatively if you do not have git on your local machine,
download the code as a zip file and extract

#### Starting the development server
Install the necessary dependencies
Run the app using `npm start`

##### IOS
Install the expo app on your phone
scan the QR code from the development server from the camera and open using the expo app

##### Android
Install the expo app on your phon
scan the QR code directly from the Expo App

#### Next Step?
Go Ahead and change the code according to your will and help make the app better

### Backend:

#### Installations
Download and setup Python From the Official Website

#### Getting the Files
Clone the repo using git and cd into the directory
alternatively if you do not have git on your local machine,
download the code as a zip file and extract

#### Installing Dependencies
Run `pip install requirements.txt` in the command line
Wait for installations to complete
Then Run `python app.py`
This should start a development server on your local machine that can be accessed within your local network

#### Next Step?
Go ahead and play around with the code and send a pull request so we can merge any useful features.

## How Does it Work?

### Frontend:
Github Page: [Bubble Client](https://github.com/KingHacker9000/bubble-client)

##### App.js
The main application file keeps track of the different screens in the application

##### screens/
Contains a list of all the screens withing the application

###### screens/components
Contains all the different components used within the different screens

##### data/studentsData.js
Contains some dummy data that will be used until put into execution and production

#### Built With
##### Frameworks
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)

##### Languages
* Javascript
* JSX

### Backend:
Github Page: [Bubble Server](https://github.com/KingHacker9000/bubble-server)

##### app.py
The main application File that includes the routes and manages the main working of the webserver.

##### function.py
This is a python file with helper functions.

##### database.py
Simplifies the using of SQLite3 Database.

##### templates/
directory containing the templates for the websites

###### templates/base.html
File that forms the basic structure of The Websites

###### templates/index.html
The Webpage shown at root directory

###### templates/login.html
Webpage Shown For users not logged in

###### templates/register.html
Webpage to Register Teachers

##### static/
Holds the Static Files for the website

###### static/styles.css
File holds styling information for HTML Files

#### Built With
##### Modules
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [simpleSQLiteDB](https://github.com/KingHacker9000/simpleDB)

##### Languages
* Python
* HTML (Jinja)
* CSS
* Javascript
* SQL

## Project Status
> This project is still ongoing
> Many Features are yet to be added
> Find The Current Status at the [Bubble Client](https://github.com/KingHacker9000/bubble-client)  Github Page

