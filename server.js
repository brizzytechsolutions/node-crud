const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
require('dotenv/config');

app.use(express.json());

mongoose.connect(
  process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true
    },
    console.log('Db Connected')
 );

 const pageRoutes = require('./routes');

 app.use(cors());
 app.use('/', pageRoutes);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});
