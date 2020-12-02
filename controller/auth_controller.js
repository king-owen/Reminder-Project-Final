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
  
    //console.log(Database)
    req.session["email"] = username;
    if(Database[username] && Database[username].password == password){
    //let reminders = req.user.reminders
    //console.log(req.user.reminders)
    // res.render('reminder/index' ,{ reminders: reminders, friendslist: req.user.friendsreminders, Database: Database })
    res.render('reminder/index' ,{ reminders: Database[username].reminders, friendslist: Database[username].friendsreminders, Database: Database }) 

    }else{
      res.locals.path = req.path
      res.render('auth/login', {newText: "incorrect", friendslist})
    }
    // res.render('reminder/index' ,{ reminders: reminders, friendslist: req.user.friendsreminders, Database: Database })
  },

  registerSubmit: (req, res) => {
    if (req.body.email && req.body.password){
      key = req.body.email
      info = { reminders: [], email: req.body.email, password: req.body.password,friendsreminders:[]};
      Database[key] = info

      

      req.session['email'] = req.body.email;

      res.redirect('/reminder/index')
      
    } else{
       
    email = ""
    errorText = "something"
    res.render('auth/register',{errorText, email: errorText, email})
    }
   
  },
  friends: (req, res) => {
    res.locals.path = req.path
    res.locals.user = req.user
    console.log(res.locals.user.friendsreminders)
    console.log(Database)
    res.render('reminder/friends',{Database: Database})
  },
  friendslist: (req, res) => {
    res.locals.path = req.path
    res.locals.user = req.user
    let reminderToFind = req.params.id;
    
    

    req.user.friendsreminders.push(reminderToFind)
    console.log(req.user.friendsreminders)
    
    res.render('reminder/index' ,{reminders: req.user.reminders, friendslist: req.user.friendsreminders, Database: Database})
  },
  
}

module.exports = authController;




