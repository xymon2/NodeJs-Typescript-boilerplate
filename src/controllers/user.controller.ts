import e, { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '.';
import { UserService } from '../services';

export class UserController extends Controller {
    private userService: UserService;

    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }

    createUser = async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.createUser();

        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    };
    getUsers = async (req: Request, res: Response, next: NextFunction) => {
        const id = 'test';
        const query = 'query';
        try {
            const serviceResult = await this.userService.getUsers(id, query);
            res.send({ status: 200, data: serviceResult, message: 'success' });
        } catch (err) {
            res.send({ status: 400, message: 'badreq' });
        }
    };
    getUserById = async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.getUserById();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    };
    updateUser = async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.updateUser();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    };
    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.deleteUser();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    };
}
