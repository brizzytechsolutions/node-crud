const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const Router = require('router');
const uri = 'mongodb://localhost:27017/KabzaUniversityDB';

const router = Router();

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
 }).then(() => {
       console.log('Database successfully connected')
    },
    error => {
       console.log('Database could not connected: ' + error)
    }
 )

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});
