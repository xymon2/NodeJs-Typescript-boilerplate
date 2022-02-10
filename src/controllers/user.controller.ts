import e, { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '.';
import { UserService } from '../services';

export class UserController extends Controller {
    private userService: UserService;

    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }
    async createUser(req: Request, res: Response, next: NextFunction) {
        const serviceResult = await this.userService.createUser();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    }
    async getUsers(req: Request, res: Response, next: NextFunction) {
        const id = 'test';
        const query = 'query';
        try {
            const serviceResult = await this.userService.getUsers(id, query);
            return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
        } catch (err) {
            return res.status(400).json({ status: 400, message: 'badreq' });
        }
    }
    async getUserById(req: Request, res: Response, next: NextFunction) {
        const serviceResult = await this.userService.getUserById();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    }
    async updateUser(req: Request, res: Response, next: NextFunction) {
        const serviceResult = await this.userService.updateUser();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    }
    async deleteUser(req: Request, res: Response, next: NextFunction) {
        const serviceResult = await this.userService.deleteUser();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    }
}
