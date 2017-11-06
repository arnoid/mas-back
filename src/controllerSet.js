import DbController from './controllers/DbController';
import SocketController from './controllers/SocketController';
import AuthAdminController from './controllers/AuthAdminController';

const dbController = new DbController();
const socketController = new SocketController();
const authAdminController = new AuthAdminController();

export default {
    dbController,
    socketController,
    authAdminController,
}