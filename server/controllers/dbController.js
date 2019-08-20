const pool = require('../../database/pool');
const { getAllUsers, getConversation, getCurrentUser, postMessage, putPassword, putUsername } = require('../../database/SqlQueries');

const dbController = {
  users: (req, res, next) => {
    pool.query(getAllUsers, (err, result) => {
      if (err) {
        console.log('error in getting all users from database')
      }
      else {
        console.log('successfully retrieved users from db');
      }
    })
    next();
  },

  conversation: (req, res, next) => {
    pool.query(getConversation, [req.body.currentUser, req.body.recipient], (err, result) => {
      if (err) {
        console.log('error in getting conversation from database')
      }
      else {
        console.log('successfully retrieved conversation from db');
      }
    })
    next();
  },

  currentUser: (req, res, next) => {
    pool.query(getCurrentUser, [req.body.currentUser], (err, result) => {
      if (err) {
        console.log('error in getting current user from database')
      }
      else {
        console.log('successfully retrieved current user from db');
      }
    })
    next();
  },

  message: (req, res, next) => {
    pool.query(postMessage, [req.body.message], (err, result) => {
      if (err) {
        console.log('error in posting message to database')
      }
      else {
        console.log('successfully posted message to db');
      }
    })
    next();
  },

  username: (req, res, next) => {
    pool.query(putUsername, [req.body.currentUser, req.body.newUsername], (err, result) => {
      if (err) {
        console.log('error in changing username in database')
      }
      else {
        console.log('successfully changed username db');
      }
    })
    next();
  },

  password: (req, res, next) => {
    pool.query(putPassword, [req.body.currentPassword, req.body.newPassword], (err, result) => {
      if (err) {
        console.log('error in changing password in database')
      }
      else {
        console.log('successfully changed password db');
      }
    })
    next();
  }
};

module.exports = dbController;