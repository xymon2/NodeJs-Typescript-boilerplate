import { UserModel } from '../models/user.model';
import { Service } from '.';

export class UserService extends Service {
    private userModel: UserModel;
    constructor(userModel: UserModel) {
        super();
        this.userModel = userModel;
    }

    async createUser() {
        return 'createUser';
    }
    async getUsers(id: string, query: string) {
        const users = await this.userModel.getUsers();
        //do something
        return users;
    }
    async getUserById() {
        return 'getUserById';
    }
    async updateUser() {
        return 'updateUser';
    }
    async deleteUser() {
        return 'deleteUser';
    }
}
