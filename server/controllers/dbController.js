const pool = require('../../database/pool');
const { getAllUsers, getConversation, getCurrentUser, postMessage, putPassword, putUsername, getLastestMessage } = require('../../database/SqlQueries');

const dbController = {
  users: (req, res, next) => {
    pool.query(getAllUsers, (err, result) => {
      if (err) {
        console.log('error in getting all users from database')
      }
      else {
        console.log('successfully retrieved users from db');
        res.locals.allUsers = result;
      }
    })
    next();
  },

  conversation: (req, res, next) => {
    pool.query(getConversation, [req.body.currentUser, req.body.recipient], (err, result) => {
      if (err) {
        console.log('error in getting conversation from database')
        res.status(500)
          .send()
      }
      else {
        console.log('successfully retrieved conversation from db');
        res.locals.conversation = result;
      }
    })
    next();
  },

  currentUser: (req, res, next) => {
    pool.query(getCurrentUser, [req.body.currentUser], (err, result) => {
      if (err) {
        console.log('error in getting current user from database')
        res.status(500)
          .send()
      }
      else {
        console.log('successfully retrieved current user from db');
        res.locals.currentUser = result;
      }
    })
    next();
  },

  message: (req, res, next) => {
    pool.query(postMessage, [req.body.message], (err, result) => {
      if (err) {
        console.log('error in posting message to database')
        res.status(500)
          .send()
      }
      else {
        console.log('successfully posted message to db');
        res.locals.postedMessage = result;
      }
    })
    next();
  },

  latestMessages: (req, res, next) => {
    pool.query(getLastestMessage, [req.body.currentUser], (err, result) => {
      if (err) {
        console.log('error in retrieving latest messages from database')
        res.status(500)
          .send()
      }
      else {
        console.log('successfully retrieved latest messages from db');
        res.locals.latestMessages = result;
      }
    })
    next();
  },

  username: (req, res, next) => {
    pool.query(putUsername, [req.body.currentUser, req.body.newUsername], (err, result) => {
      if (err) {
        console.log('error in changing username in database')
        res.status(500)
          .send()
      }
      else {
        console.log('successfully changed username db');
        res.locals.newUsername = result;
      }
    })
    next();
  },

  password: (req, res, next) => {
    pool.query(putPassword, [req.body.currentPassword, req.body.newPassword], (err, result) => {
      if (err) {
        console.log('error in changing password in database')
        res.status(500)
          .send()
      }
      else {
        console.log('successfully changed password db');
        res.locals.newPassword = result;
      }
    })
    next();
  }
};

module.exports = dbController;