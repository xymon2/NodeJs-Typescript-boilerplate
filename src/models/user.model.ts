import { Model } from './index';

export class UserModel extends Model {
    db: any;

    constructor() {
        super();
        this.db = [
            { id: 'test', username: 'patrick' },
            { id: 'test2', username: 'spongebob' },
        ];
    }
    getUsers() {
        return this.db;
    }
}
