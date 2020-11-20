const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const landingController = require("./controller/landing_controller");



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

app.get("/reminders", reminderController.list)

app.get("/reminder/new", reminderController.new)

app.get("/reminder/:id", reminderController.listOne)

app.get("/reminder/:id/edit", reminderController.edit)

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
