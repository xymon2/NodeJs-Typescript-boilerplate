import { UserModel } from '../models/user.model';
import { Service } from './index';

export class UserService extends Service {
    private userModel: UserModel;
    constructor(userModel: UserModel) {
        super();
        this.userModel = userModel;
    }

    getUsers(id: string, query: string) {
        const users = this.userModel.getUsers();
    }
}
