var Datastore = require('nedb'), db = { }; 
db = new Datastore( { filename: './eamemes.nedb', autoload: true }); 

db.find({ type: 'noun' }, function(err, res) { 
	res.forEach(function(n) { console.log("Noun: " + n.word + " (" + n._id + ")"); });
}); 
