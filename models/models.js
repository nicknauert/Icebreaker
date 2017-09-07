const mongoose = require('mongoose');
const schema = mongoose.schema;


const QuestionSchema = new mongoose.Schema({
    category: String,
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answers: [{type: String}]
})


const Question = mongoose.model('Question', QuestionSchema);


module.exports = {
  Question
}
