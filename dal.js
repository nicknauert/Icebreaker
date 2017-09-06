const chalk = require('chalk');
const {} = require('./models/models.js');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/playerSchema', {
  useMongoClient: true
});

function getCategory(){
  return
}

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
