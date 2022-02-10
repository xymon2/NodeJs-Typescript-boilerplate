import e, { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '.';
import { UserService } from '../services';

export class UserController extends Controller {
    private userService: UserService;

    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }
    createUser = async (req: Request, res: Response, next: NextFunction) => {};
    getUsers = async (req: Request, res: Response, next: NextFunction) => {
        const id = 'test';
        const query = 'query';
        try {
            const serviceResult = await this.userService.getUsers(id, query);
            return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
        } catch (err) {
            return res.status(400).json({ status: 400, message: 'badreq' });
        }
    };
    getUserById = async (req: Request, res: Response, next: NextFunction) => {};
    updateUser = async (req: Request, res: Response, next: NextFunction) => {};
    deleteUser = async (req: Request, res: Response, next: NextFunction) => {};
}
