const { request } = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/KabzaUniversityDB', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Successfully established connection with MongoDB')
    }
    else {
        console.log('Failed to establish a connection with mongodb' + err)
    }
});

/// connect to mongodb
request('./course.model');