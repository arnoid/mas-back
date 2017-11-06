import admin from 'firebase-admin';
import uuidv1 from 'uuid/v1';
import serviceAccount from '../../merc-as-firebase-adminsdk-8eflz-052bdbb34e.json';

const TAG = "AUTH-ADMIN";

export default class DbController {

    constructor() {
        this.accessTokenStore = {};

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://merc-as.firebaseio.com"
        });

        console.info(TAG, 'constructed');
    }

    verifyIdToken(token) {
        return admin.auth().verifyIdToken(token);
    }

    saveUser(accessToken, user) {
        this.accessTokenStore[accessToken] = {
            user,
            timestamp: Date.now(),
        }
    }

    getUser(accessToken) {
        return this.accessTokenStore[accessToken];
    }

    removeUser(accessToken) {
        delete this.accessTokenStore[accessToken];
    }

    static generateSecurityToken() {
        return uuidv1();
    }

}