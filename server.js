const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const uri = 'mongodb://localhost:27017/KabzaUniversityDB';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
 }).then(() => {
       console.log('Database sucessfully connected')
    },
    error => {
       console.log('Database could not connected: ' + error)
    }
 )

app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});