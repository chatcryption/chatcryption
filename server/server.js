const express = require('express');
const path = require('path');
const app = express();
const dbController = require('./controllers/dbController');
const authController = require('./controllers/authController');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


app.use('/build', express.static('build'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/login', dbController.authorization, authController.setCookie, (req, res) => {
  res.status(200)
    .redirect(path.join(__dirname, '../client/index.html'))
})

// need an endpoint for the most recent message from each contact

app.get('/conversation', dbController.conversation, (req, res) => {
  res.status(200)
    .json(res.locals.conversation)
});

app.get('/users', dbController.users, (req, res) => {
  res.status(200)
    .json(res.locals.allUsers)
});

app.get('/currentUser', dbController.currentUser, (req, res) => {
  res.status(200)
    .json(res.locals.currentUser)
});

app.get('/latestMessage', dbController.latestMessages, (req, res) => {
  res.status(200)
    .json(res.locals.latestMessages)
})

app.post('/message', dbController.checkUserId, dbController.message, (req, res) => {
  res.status(200)
    .json(res.locals.postedMessage)
});

app.put('/username', dbController.username, (req, res) => {
  res.status(200)
    .json(res.locals.newUsername)
});

app.put('/password', dbController.password, (req, res) => {
  res.status(200)
    .json(res.locals.newPassword)
})


app.listen(3000, () => 'Server is listening on port 3000');
