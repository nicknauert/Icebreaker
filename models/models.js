const mongoose = require('mongoose');
const schema = mongoose.schema;



const QuestionSchema = new mongoose.Schema({
    category: String,
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
<<<<<<< HEAD
    incorrect_answers: [{type: String}]
=======
    incorrect_answers: [{type: String}],
>>>>>>> 4307236f1cb6e24ee979abf60e5f1a47468889eb
})


const Question = mongoose.model('Question', QuestionSchema);


module.exports = {
  Question
}
