const express = require('express');
const app = express();
const mustache = require('mustache-Express');
const {getQuestion, replaceUnicode } = require('./dal');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const {} = require('./models/models.js');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/triviadb', {mongoClient: true});

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')


////////////// MIDDLEWARE //////////////

app.use(express.static('./public'));
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
    sesh.trivia = {}
    sesh.trivia.cat = cat;
    sesh.trivia.diff = diff;
    sesh.trivia.question = replaceUnicode(ques.question);
    sesh.trivia.correctAns = replaceUnicode(ques.correct_answer);
    let answers = []
    ques.incorrect_answers.forEach((item) => {
      let incObj = {answer: item, correct: false };
      incObj.answer = replaceUnicode(incObj.answer);
      answers.push(incObj);
    })
    let number = Math.floor(Math.random() * 3)+1
    console.log(chalk.blue(number));
    let corObj = {answer: ques.correct_answer, correct: true }
    answers.splice(number, 0, corObj);
    sesh.trivia.answers = answers;
    console.log("answers = ", answers);
    res.redirect('/game');
  });
})

app.get('/game', function(req, res){
  console.log(req.session);
  let sesh = req.session.trivia;
  res.render('game', { sesh });
})

app.post('/game', (req, res)=>{
  let sesh = req.session;
  let pick = req.body.pick;
  let correctAns = req.session.trivia.correctAns;
  let cat = sesh.trivia.cat;
  let diff = sesh.trivia.diff;
  console.log(chalk.green(pick, correctAns));
  if(pick != correctAns){
    res.render('gameLoser', { sesh })
  } else {
    getQuestion(cat, diff)
    .then((ques) =>{
      sesh.trivia = {};
      sesh.trivia.cat = cat;
      sesh.trivia.diff = diff;
      sesh.trivia.question = replaceUnicode(ques.question);
      sesh.trivia.correctAns = replaceUnicode(ques.correct_answer);
      let answers = [];
      ques.incorrect_answers.forEach((item) => {
        let incObj = {answer: item, correct: false }
        answers.push(replaceUnicode(incObj));
      })
      let number = Math.floor(Math.random() * 3)
      console.log(chalk.blue(number));
      let corObj = {answer: ques.correct_answer, correct: true }
      answers.splice(number, 0, corObj);
      sesh.trivia.answers = answers;
      console.log("answers = ", answers);
      res.redirect('/game');
    });
  }

})



app.listen(3000, () => {
  console.log(chalk.green('App running on 3000. Better catch it.'))
})
