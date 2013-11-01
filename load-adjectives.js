var Datastore = require('nedb'), db = { }; 
db = new Datastore( { filename: './eawords.nedb', autoload: true }); 

var lazy = require('lazy'), fs = require('fs'); 
new lazy(fs.createReadStream('input/adjectives.txt'))
	.lines
	.forEach(function(line) { 
		console.log('Loaded adjective: ' + line.toString()); 
		db.insert( { word: line.toString(), type: 'adjective' }, function(err, newDoc) {}); 
	}
);
