
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var WordProvider = require('./wordprovider').WordProvider;
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('roflxoxoxoxo'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
app.get('/', function(req, res) { 
  var wp = new WordProvider('./eawords.nedb'); 
  wp.getRandomNouns(2, function(nouns) { 
    wp.getRandomAdjectives(2, function(adjectives) {  
      var word = adjectives[0].word + ', ' + adjectives[1].word + ' ' + nouns[0].word;
      console.log('Word of the day is ' + word);
      res.render('index', { title: 'Enterprise Architecture Meme Generator', word: word, a: adjectives, n: nouns }); 
    });
  });
});

app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
