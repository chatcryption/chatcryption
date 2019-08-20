const express = require('express');
const path = require('path');
const app = express();

app.use('/build', express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/conversation', (req, res) => {

});

app.get('/users', (req, res) => {

});

app.get('/currentUser', (req, res) => {

});

app.post('/message', (req, res) => {

});

app.put('/username', (req, res) => {

});

app.put('/password', (req, res) => {

})


app.listen(3000, () => 'Server is listening on port 3000');