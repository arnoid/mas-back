import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const TAG = 'DB-CONTROLLER';

export default class DbController {

    constructor() {
        this.adapter = new FileSync('db.json');
        this.db = low(this.adapter);

        console.info(TAG, 'constructed');
    }
}