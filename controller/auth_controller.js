let {Database} = require("../database");



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
    console.log(Database)
    if (req.body.email && req.body.password){
      Database[req.body.email] = { reminders: [], email: req.body.email, password: req.body.password };
      info = { reminders: [], email: req.body.email, password: req.body.password };

      // let newEmail = req.body.email
      // Database.push({req.body.email: info})

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


// //register
// app.post('/register', (req, res) => {
//   console.log('register', req.body)
//   if (req.body.username && req.body.password) {
//     users[req.body.username] = {username: req.body.username, password: req.body.password};
//     req.session['user'] = req.body.username;
//     res.redirect('/me');
//   } else {
//     res.status(400);
//     res.send('invalid user');
//   }
// });

