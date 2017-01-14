var express     = require('express');
var http        = require('http');
var fs          = require('fs');
var app         = express();
var server      = http.createServer(app);
var io          = require('socket.io').listen(server);

app.set('views', __dirname + '/public');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({ beautify: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/index.html');
  //res.render('index',{name:"almanegra2"});
});


io.on('connection', function(socket){
  console.log('a user connected');

  io.emit('chat message', config.chat.welcomeString);

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//server.listen(app.get('port'));

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
});
