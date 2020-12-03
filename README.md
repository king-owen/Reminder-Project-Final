 # Reminder-Project-Final
# Creators: Luke Salmon, Owen Anderchek, Ijaz Hussain, Taymoor Khan


ACIT 2520 Project

**Project Structure:**
C:\REMINDER-PROJECT-FINAL
│   database.js
│   index.js
│   LICENSE.txt
│   package-lock.json
│   package.json
│   README.md
│
├───controller
│       auth_controller.js
│       reminder_controller.js
│
├───middleware
│       auth.js
│
├───public
│       index.html
│       script.js
│       style.css
│
└───views
    │   layout.ejs
    │
    ├───auth
    │       login.ejs
    │       register.ejs
    │
    ├───partials
    │       navbar.ejs
    │
    └───reminder
            create.ejs
            edit.ejs
            friends.ejs
            index.ejs
            single-reminder.ejs
            weather.ejs

**Structure Explanation**
The code is implemented in an MVC pattern, with the controllers choosing what parts of the views to display depending on user input and user events. There is no model folder because we are currently using a mock database in a .js file. There is also a middleware directory containing a cookie folder that authenticates each reminder page with cookies. 

**Incomplete Tasks**
We didn't implement every user having a spot in their database for profile picture, how we would resolve this is to take an input from the new user and then input it into the unsplash link into the database. If user doesn't input an image link, we give them a default silhouette image. To display the image we would implement it into the ejs pages, depending on where the profile picture would fit nicely.

**Dependencies**
"body-parser": "^1.15.2",
"cookie-session": "^1.4.0",
"ejs": "^2.7.4",
"express": "^4.17.1",
"express-ejs-layouts": "^2.2.0",
"method-override": "^2.3.7",
"mongoose": "^4.7.7",
"node-fetch": "^2.6.1",
"nodemon": "^1.11.0"

