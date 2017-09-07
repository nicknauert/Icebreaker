const mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
const chalk = require('chalk');
const { Question } = require('./models/models.js');



function checkAnswer(ans, chosenAns){
  if(ans != chosenAns){
    return ""
  }
}

function getQuestion(cat, diff){
  return Question.find({  difficulty: diff  }).then((quesArr)=>{

    let number = Math.floor(Math.random() * quesArr.length)
    return quesArr[number]
  })
}



module.exports = {
  getQuestion
}
