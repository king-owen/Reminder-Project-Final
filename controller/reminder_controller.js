let {Database} = require("../database");

let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    res.render('reminder/index', { reminders: Database.cindy.reminders })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.locals.path = req.path
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = Database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: Database.cindy.reminders })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: Database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      subtasks: req.body.subtasks,
      tags: req.body.tags,
      completed: false
    }
    Database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  // Show the Edit Reminder Page
  edit: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    //find the reminder
    let obj = Database.cindy.reminders.find(obj => obj.id == reminderToFind)
    res.render('reminder/edit',{reminderItem: obj})
  },

  // Edit the Reminder
  update: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToUpdate = req.params.id;
    // find the reminder
    let obj = Database.cindy.reminders.find(obj => obj.id == reminderToUpdate)
    // Updates the reminder
    let reminder = {
      id: obj.id,
      title: req.body.title,
      description: req.body.description,
      subtasks: req.body.subtasks,
      tags: req.body.tags,
      completed: Boolean(req.body.completed)
    }
    // Database.cindy.reminders.find(obj => obj.id == reminder.id) = reminder;
    Database.cindy.reminders[obj.id - 1] = reminder;
    // Render edited reminder
    res.redirect('/reminders');
  },

  // Delete the Reminder
  delete: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToDelete = req.params.id;
    // find the reminder
    let obj = Database.cindy.reminders.find(obj => obj.id == reminderToDelete)
    let deleteIndex = Database.cindy.reminders.indexOf(obj);
    // finds the index of the reminder
    Database.cindy.reminders.splice(deleteIndex, 1);
    // removes the index of the item form the list in the Database
    res.redirect('/reminders');
  }
}

module.exports = remindersController;
