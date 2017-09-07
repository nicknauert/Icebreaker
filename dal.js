const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const chalk = require('chalk');
const { Question } = require('./models/models.js');
const {Trivia} = require('./models/models.js');


<<<<<<< HEAD

function getQuestion(cat, diff){
  return Question.find({ category: cat, difficulty: diff }).then((quesArr)=>{

=======
function getQuestion(cat, diff){
  return Question.find({ category: cat, difficulty: diff }).then((quesArr)=>{
>>>>>>> 4307236f1cb6e24ee979abf60e5f1a47468889eb
    let number = Math.floor(Math.random() * quesArr.length)
    return quesArr[number]
  })
}


function replaceUnicode(string) {
  let oneQuote = string.replace(/&quot;/gi, '"');
  let twoQuote = oneQuote.replace(/&quot;/gi, '"');
  let threeQuote = twoQuote.replace(/&amp;/gi, '&');
  let fourQuote = threeQuote.replace(/&#039;/gi, "'");

  let finalStr = fourQuote.replace(/&Uuml;/gi, "Ü");
  return finalStr
}

module.exports = {
  getQuestion,
  replaceUnicode
}
