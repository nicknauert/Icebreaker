const mongoose = require('mongoose');
const schema = mongoose.schema;


const musicEasySchema = new mongoose.Schema({
  {
    Category: String,
    Type: String,
    Difficulty: String,
    Question: String,
    Correct_Answer: String,
    Incorrect_Answer: [{type: String}],
  },
})

const musicHardSchema = new mongoose.Schema({
  {
    Category: String,
    Type: String,
    Difficulty: String,
    Question: String,
    Correct_Answer: String,
    Incorrect_Answer: [{type: String}],
  },
})

const sportsEasySchema = new mongoose.Schema({
  {
    Category: String,
    Type: String,
    Difficulty: String,
    Question: String,
    Correct_Answer: String,
    Incorrect_Answer: [{type: String}],
  },
})

const sportsHardSchema = new mongoose.Schema({
  {
    Category: String,
    Type: String,
    Difficulty: String,
    Question: String,
    Correct_Answer: String,
    Incorrect_Answer: [{type: String}],
  },
})

const computersEasySchema = new mongoose.Schema({
 {
   Category: String,
   Type: String,
   Difficulty: String,
   Question: String,
   Correct_Answer: String,
   Incorrect_Answer: [{type: String}],
  },
})

const computersHardSchema = new mongoose.Schema({
  {
    Category: String,
    Type: String,
    Difficulty: String,
    Question: String,
    Correct_Answer: String,
    Incorrect_Answer: [{type: String}],
  },
})



const musicEasySchema = mongoose.model('musicEasy', musicEasySchema);
const musicHardSchema = mongoose.model('musicHard', musicHardSchema);
const sportsEasySchema = mongoose.model('sportsEasy', sportsEasySchema);
const sportsHardSchema = mongoose.model('sportsHard', sportsHardSchema);
const computersEasySchema = mongoose.model('computersEasy', computersEasySchema);
const computersHardSchema = mongoose.model('computersHard', computersHardSchema);



module.exports = {
  musicEasy,
  musicHard,
  sportsEasy,
  sportsHard,
  computersEasy,
  computersHard
}
