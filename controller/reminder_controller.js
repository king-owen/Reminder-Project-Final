//const database = require("../database");
let {Database} = require("../database");
let fetch = require("node-fetch")


let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    //let { email } = req.user;
    //console.log(req.user, 'inlist controller')
    res.render('reminder/index', { reminders: req.user.reminders })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.locals.path = req.path
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    //let { email } = req.user;
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: req.user.reminders })
    }
  },
  friends : (req, res) => {
    //console.log('called')
    //res.locals.path = req.path
    res.render('reminder/friends')
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    //let { email } = req.user;
    let reminder = {
      id: Database[req.session.email].reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      subtasks: req.body.subtasks.split(", "),
      tags: req.body.tags,
      completed: false
    }
    //console.log(req.session.email)
    Database[req.session.email].reminders.push(reminder);
    console.log(Database[req.session.email].reminders)
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    let { email } = req.user;
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    //find the reminder
    let obj = Database[email].reminders.find(obj => obj.id == reminderToFind)
    res.render('reminder/edit',{reminderItem: obj})
  },

  // Edit the Reminder
  update: (req, res) => {
    let { email } = req.user;
    // ⭐️ your implementation here ⭐️
    let reminderToUpdate = req.params.id;
    // find the reminder
    let obj = Database[email].reminders.find(obj => obj.id == reminderToUpdate)
    // Updates the reminder
    let reminder = {
      id: obj.id,
      title: req.body.title,
      description: req.body.description,
      subtasks: req.body.subtasks.split(", "),
      tags: req.body.tags,
      completed: Boolean(req.body.completed)
    }
    // Database.cindy.reminders.find(obj => obj.id == reminder.id) = reminder;
    Database[email].reminders[obj.id - 1] = reminder;
    // Render edited reminder
    res.redirect('/reminders');
  },

  // Delete the Reminder
  delete: (req, res) => {
    let { email } = req.user;
    // ⭐️ your implementation here ⭐️
    let reminderToDelete = req.params.id;
    // find the reminder
    let obj = Database[email].reminders.find(obj => obj.id == reminderToDelete)
    let deleteIndex = Database[email].reminders.indexOf(obj);
    // finds the index of the reminder
    Database.cindy.reminders.splice(deleteIndex, 1);
    // removes the index of the item form the list in the Database
    res.redirect('/reminders');
  },

  getweather: async (req, res) => {
    const fetchResponse = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=c004c3242a4f08ed84f44a0b4f71a0db");
    const data = await fetchResponse.json();
    res.render("reminder/weather", {
      data
    })
    console.log(data);
  }
}

module.exports = remindersController;
