let database = require("../database");

let authController = {
  login: (req, res) => {
    res.locals.path = req.path
    res.render('auth/login')
  },

  register: (req, res) => {
    res.locals.path = req.path
    let email = req.query.email
    res.render('auth/register',{email: email})
  },

  loginSubmit: (req, res) => {
    // implement
  },

  registerSubmit: (req, res) => {
    // implement
  }
}

module.exports = authController;