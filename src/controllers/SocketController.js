import SocketIo from 'socket.io';

const TAG = 'SOCKET.IO';

export default class SocketController {
    constructor() {
        const port = process.env.PORT || '3000';
        this.io = new SocketIo(port)

        this.io.on('connection', this.onConnection.bind(this));
        this.io.on(process.env.SOCKET_MSG_ECHO, this.onEcho.bind(this));
    }

    onConnection(data) {
        console.log(TAG, 'onConnection', data);
    }

    onEcho(data) {

    }

}