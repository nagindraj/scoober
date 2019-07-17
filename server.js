const express = require('express');
const app = express();
const router = require('./routes');
const connectToMongo = require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongo();
// apply the routes to our application
app.use('/', router);

app.listen(5000);