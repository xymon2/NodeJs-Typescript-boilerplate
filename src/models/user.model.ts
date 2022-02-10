import { Model } from '.';

export class UserModel extends Model {
    db: any;

    constructor() {
        super();
        this.db = [
            { id: 'test', username: 'patrick' },
            { id: 'test2', username: 'spongebob' },
        ];
    }
    async getUsers() {
        return await this.db;
    }
}
