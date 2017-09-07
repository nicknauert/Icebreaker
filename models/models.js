const mongoose = require('mongoose');
const schema = mongoose.schema;


const QuestionSchema = new mongoose.Schema({
    Category: String,
    Type: String,
    Difficulty: String,
    Question: String,
    Correct_Answer: String,
    incorrect_answers: [{type: String}]
})


const Question = mongoose.model('Question', QuestionSchema);


module.exports = {
  Question
}
