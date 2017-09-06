const chalk = require('chalk');
const {} = require('./models/models.js');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/playerSchema', {
  useMongoClient: true
});

<<<<<<< HEAD
function getCategory(){
  return
}
=======
function 

>>>>>>> 2ecc9ddbacc443a9da04b13a88ff1fd177eeba1c

function getDiff(){
  return
}

function getTrivia(){
  return
}


module.exports = {
  getCat,
  getDif,
  getTrivia,
}
