const express = require('express');
const app = express();
const mustache = require('mustache-Express');
const {} = require('./dal');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const {} = require('./models/models.js');


mongoose.connect('mongodb://localhost:27017/triviadb');

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
app.get('/', function(req, res){
  res.render('gameStarter')
})

app.post('/', function(req, res){
  let cat = req.body.category
  let form = req.body.difficulty
  let sesh = req.session
  getTrivia(cat, diff)
  .then((ques) =>
    sesh.question = ques.question
    sesh.correctAns = ques.correct_answer
    sesh.answers = ques.incorrect_answer

  res.redirect('/game')
})

app.get('/gameStarter', function(req, res){

})
app.get('/game', function(req, res){

})

app.listen(3000, () => {
  console.log(chalk.green('App running on 3000. Better catch it.'))
})
