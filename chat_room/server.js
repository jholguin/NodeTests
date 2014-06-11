var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

server.listen(3000, function(){
	console.log('listening on *:3000');
});

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});

io.on('connection', function(socket){
	console.log("a user connected");

	socket.on('touch', function(msg){
		io.emit('touch', msg);
	});

	socket.on('disconnect', function(){
		console.log("user disconnected");
	})

});












// var io = require('socket.io'),
//   connect = require('connect');

// var app = connect().use(connect.static('public')).listen(80);
// var chat_room = io.listen(app);

// chat_room.sockets.on('connection', function(socket){
// 	chat_room.sockets.emit('welcome', {message: 'Welcome!!!!'});

	

// 	// socket.on('disconnect', function(){
// 	// 	chat_room.sockets.emit('exit', {message: 'A chatter has disconnected.'});
// 	// });

// 	// socket.on('chat', function(data){
// 	// 	chat_room.sockets.emit('chat', {message: '# ' + data.message});
// 	// });

// 	// chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
// });
