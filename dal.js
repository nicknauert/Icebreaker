const chalk = require('chalk');
const {} = require('./models/models.js');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')


checkAnswer(ans, chosenAns){
  if(ans != chosenAns){
    return ""
  }
}


function getTrivia(cat, diff){
  return Trivia.find({$and: [{category: cat}, {difficulty: diff}]}).then((quesArr)=>{
    let number = Math.floor(Math.random() * quesArr.length)
    return quesArr[number]
  })
}



module.exports = {
  getTrivia,
}
