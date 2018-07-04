const express = require('express'),
    socketDriver = require('socket.io'),
    app = express();

app.set('port', (process.env.PORT || 6000));

const server = app.listen(app.get('port'), () => {console.log('Server is starting on port ' + app.get('port'))});

const io = socketDriver(server);

const store = {driverSocket: null};
const connectdriver = (socket) => {
    store.driverSocket = socket;

    store.driverSocket.on('CIMI', (data) => {
        console.log(data);

        //socket.emit('clean');
        //store.driverSocket.emit('check-msg');
        //socket.emit('send-msg', "+79505802021");
    });

    store.driverSocket.on('code', (data) => {
        console.log(data);

        store.driverSocket.emit('stop');
    });
};

io.on('connection', (socket) => {
    socket.on('driver', () => {
        connectdriver(socket);
    });

    socket.on("mt-test", () => {});
});

setTimeout(() => {store.driverSocket.emit('start', "COM11");}, 5000);