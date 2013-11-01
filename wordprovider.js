var DataStore = require('nedb'); 

// Shuffles the contents of an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex; 

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Constructor opens nedb file
WordProvider = function(dbfile) { 
  this.db = new DataStore({filename: dbfile, autoload: true });  
}; 

// Get i random nouns and return to callback
WordProvider.prototype.getRandomNouns = function(i, callback) { 
  this.db.find({type: 'noun'}, function(err, res) { 
    var nouns = shuffle(res);
    callback(nouns.slice(0, i));
  }); 
}

// Get i random adjectives and return to callback
WordProvider.prototype.getRandomAdjectives = function(i, callback) { 
  this.db.find({type: 'adjective'}, function(err, res) { 
    var adjectives = shuffle(res); 
    callback(adjectives.slice(0, i));
  });
}

exports.WordProvider = WordProvider;

