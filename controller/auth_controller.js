const database = require("../database");
let {Database} = require("../database");



let authController = {
  login: (req, res) => {
    res.locals.path = req.path
    res.render('auth/login', {newText: undefined})
  },
  

  register: (req, res) => {
    // console.log("ok")
    res.locals.path = req.path
    let email = req.query.email
    res.render('auth/register',{email, errorText: email, undefined})
    // This is where a problem is, can't figure out
  },

  loginSubmit: (req, res) => {
    let username = req.body.email;
    let password = req.body.password;
    // console.log(req.body.email)
    // console.log(Database[username].password)
    console.log(Database)
    req.session["email"] = username;
    if(Database[username] && Database[username].password == password){
      //res.locals.email = username;
      console.log(req.session.email,'loginsubmit')
      //console.log('here')

      res.redirect('reminder/index')

    }else{
      res.locals.path = req.path
      res.render('auth/login', {newText: "incorrect"})
    }
    //res.redirect('/reminders')
  },

  registerSubmit: (req, res) => {
    if (req.body.email && req.body.password){
      key = req.body.email
      info = { reminders: [], email: req.body.email, password: req.body.password };
      Database[key] = info

      console.log(req.body.email)

      req.session['email'] = req.body.email;

      res.redirect('/reminder/index')
      // Also could be here for problem
      //console.log(Database[key])
    } else{
//       console.log("err")
    email = ""
    errorText = "something"
    res.render('auth/register',{errorText, email: errorText, email})
    }
   
  },
  friends: (req, res) => {
    console.log('called')
    //console.log(Database)
    res.locals.path = req.path
    console.log(res.locals.path)
    res.render('reminder/friends',{Database: Database})
  },
  
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

