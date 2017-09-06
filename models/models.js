const mongoose = require('mongoose');
const schema = mongoose.schema;


const questionsSchema = new mongoose.Schema({
  {
    Category: String,
    Type: String,
    Difficulty: String,
    Question: String,
    Correct_Answer: String,
    Incorrect_Answer: [{type: String}],
  }
})


const questionsSchema = mongoose.model('questions', questionsSchema);


module.exports = {
  questions
}
