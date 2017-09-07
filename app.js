const express = require('express');
const app = express();
const mustache = require('mustache-Express');
const {getQuestion} = require('./dal');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const {} = require('./models/models.js');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/trivia', {usemongoClient: true});

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
  res.render('gameStarter');
})

app.post('/', function(req, res){
  let cat = req.body.category
  let diff = req.body.difficulty
  let sesh = req.session
  getQuestion(cat, diff)
  .then((ques) =>{
    sesh.Question = ques.Question
    sesh.correctAns = ques.correct_answer
    let answers = ques.incorrect_answers
    answers.push(ques.correct_answer)
    console.log(ques.correct_answer);
    res.redirect('/game')
  });

})

app.get('/gameStarter', function(req, res){

})

app.get('/game', function(req, res){
  console.log(req.session);
  res.send("worked maybe.")
})



app.listen(3000, () => {
  console.log(chalk.green('App running on 3000. Better catch it.'))
})
