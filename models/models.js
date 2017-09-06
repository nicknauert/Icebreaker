const mongoose = require('mongoose');
const schema = mongoose.schema;


const triviaSchema = new mongoose.Schema({
  info: {
    catagory: String,
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answer: [{type: String}],
  },
})



const trivia = mongoose.model('trivia', triviaSchema);


module.exports = {
  trivia
}
