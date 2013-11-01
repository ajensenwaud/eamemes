var Datastore = require('nedb'), db = { }; 
db = new Datastore( { filename: './eawords.nedb', autoload: true }); 

var lazy = require('lazy'), fs = require('fs'); 
new lazy(fs.createReadStream('input/nouns.txt'))
	.lines
	.forEach(function(line) { 
		console.log('Loaded noun: ' + line.toString()); 
		db.insert( { word: line.toString(), type: 'noun' }, function(err, newDoc) {}); 
	}
);
