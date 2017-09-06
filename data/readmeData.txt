music 50 easy
https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple
music 50 hard
https://opentdb.com/api.php?amount=50&category=12&difficulty=medium&type=multiple

computers 50 easy
https://opentdb.com/api.php?amount=35&category=18&difficulty=easy&type=multiple
https://opentdb.com/api.php?amount=35&category=18&difficulty=medium&type=multiple

sports 50
https://opentdb.com/api.php?amount=50&category=21&difficulty=easy&type=multiple
https://opentdb.com/api.php?amount=50&category=21&difficulty=medium&type=multiple

//copy and paste from the command line while in the main folder for the project

mongoimport --db triviadb --collection questions --file data/musicEasy.js --jsonArray
mongoimport --db triviadb --collection questions --file data/musicHard.js --jsonArray
mongoimport --db triviadb --collection questions --file data/computerEasy.js --jsonArray
mongoimport --db triviadb --collection questions --file data/computerHard.js --jsonArray
mongoimport --db triviadb --collection questions --file data/sportsEasy.js --jsonArray
mongoimport --db triviadb --collection questions --file data/sportsHard.js --jsonArray
