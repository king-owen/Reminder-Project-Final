let database = require("../database");



let authController = {
  login: (req, res) => {
    res.locals.path = req.path
    res.render('auth/login')
  },

  register: (req, res) => {
    // console.log("ok")
    res.locals.path = req.path
    let email = req.query.email
    res.render('auth/register',{email: email})
  },

  loginSubmit: (req, res) => {
    //implement
  },

  registerSubmit: (req, res) => {
//     console.log("test")
    if (req.body.email && req.body.password){
      database[req.body.email] = {email: req.body.email, password: req.body.password};
      req.session["email"] = req.body.email;
      res.redirect('/reminders')
    } else{
//       console.log("err")
      res.status(400);
      res.send("invalid user")
    }
  }
}

module.exports = authController;
