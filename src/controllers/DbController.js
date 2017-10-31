import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

export default class DbController {

    constructor() {
        this.adapter = new FileSync('db.json');
        this.db = low(this.adapter);
    }
}