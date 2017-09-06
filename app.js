const express = require('express');
const app = express();
const mustache = require('mustache-Express');
const {} = require('./dal');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const {} = require('./models/models.js');
const session = require('express-session');


mongoose.connect('mongodb://localhost:27017/trivia');

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')


////////////// MIDDLEWARE //////////////

app.use(express.static('./frontend/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: 'mudlark',
  resave: false,
  saveUninitialized: true
}))


//////////// Content Routes /////////////////





app.listen(3000, () => {
  console.log(chalk.green('App running on 3000. Better catch it.'))
})
