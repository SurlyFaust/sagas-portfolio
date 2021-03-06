const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientRoute = require('./routes/route.client');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- ROUTES ---------- **/
app.use('/projectlist', clientRoute);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});