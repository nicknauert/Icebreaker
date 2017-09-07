const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/triviadb', {
  useMongoClient: true
})
const chalk = require('chalk');
const { questions } = require('./models/models.js');


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
