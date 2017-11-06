import SocketIo from 'socket.io';

const TAG = 'SOCKET.IO';

export default class SocketController {
    constructor() {
        const port = process.env.SOCKET_PORT || '4000';
        this.io = new SocketIo(port);

        this.io.on('connection', this.onConnection.bind(this));

        console.info(TAG, 'constructed');
    }

    onConnection(socket) {
        socket.on('echo', this.onEcho.bind(this));
        socket.on('message', this.onMessage.bind(this));
        console.log(TAG, 'onConnection');
        socket.on('disconnect', () => {
            console.log(TAG, 'onDisconnect');
        });
    }

    onEcho(data) {
        console.log(TAG, 'onEcho', data);
        this.io.emit('echo', data);
    }

    onMessage(data) {
        console.log(TAG, 'onMessage', data);
    }

}