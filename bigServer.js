const express = require('express'),
    socketDriver = require('socket.io'),
    app = express();

app.set('port', (process.env.PORT || 7000));

const server = app.listen(app.get('port'), () => {console.log('Server is starting on port ' + app.get('port'))});

const io = socketDriver(server);

io.on('connection', (socket) => {
    console.log("AAAAAAAAAAAA");
});