const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const cookieSession = require("cookie-session");
const authCheck = require("./middleware/auth")
let {Database} = require("./database");
//const remindersController = require("./controller/reminder_controller");
// const landingController = require("./controller/landing_controller");


// initiate cookie session name, key scrambler, maximum time on login
app.use(cookieSession({
  name: "session",
  keys: ["aaa", "bbb", "ccc"],
  maxAge: 10*24*3600*1000
}))

// implement middleware function
app.use(function(req, res, next){
  // console.log("Email is " + req.email)

  if(req.session.email){
      if (Database[req.session.email]) {
          //console.log('inside middle function')
          req.user = Database[req.session.email];
          next();
      }
  }   else{
      next();
  }
})



app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

// app.use(function(req, res, next) {
//   res.locals = {
//       path :req.path
      
//   }
//   console.log(res.locals.path)
//   next(); // make sure we go to the next routes and don't stop here
// });

// console.log(res.locals.path)

app.set("view engine", "ejs");

// Routes start here

app.get("/reminders", authCheck, reminderController.list)

app.get("/reminder/new", authCheck, reminderController.new)

app.get("/reminder/:id", authCheck, reminderController.listOne)

app.get("/reminder/:id/edit", authCheck, reminderController.edit)

app.get("/friends",authCheck, authController.friends);

app.get("/friends/:id",authCheck, authController.friendslist);

app.post("/reminder/", reminderController.create)

app.post("/reminder/update/:id", reminderController.update)

app.post("/reminder/delete/:id", reminderController.delete)

//app.post("/register",landingController.register);

app.get("/register", authController.register);

app.get("/login", authController.login);

app.post("/register", authController.registerSubmit);

app.post("/login", authController.loginSubmit);


app.listen(3001, function () {
  console.log("Server running. Visit: localhost:3001/reminders in your browser 🚀");
});
