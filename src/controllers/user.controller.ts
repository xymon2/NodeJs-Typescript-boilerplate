import { NextFunction, Request, Response } from 'express';
import { Controller } from '.';
import { Badrequest } from '../error';
import { UserService } from '../services';
import { asyncHandler } from '../utils';

export class UserController extends Controller {
    private userService: UserService;

    constructor(userService: UserService) {
        super();
        this.userService = userService;
    }

    createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.createUser();

        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    });

    getUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const id = 'test';
        const query = 'query';
        try {
            const serviceResult = await this.userService.getUsers(id, query);
            res.send({ status: 200, data: serviceResult, message: 'success' });
        } catch (err) {
            const msg = (err as Error).message;
            throw new Badrequest(msg);
        }
    });

    getUserById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.getUserById();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    });

    updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.updateUser();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    });

    deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const serviceResult = await this.userService.deleteUser();
        return res.status(200).json({ status: 200, data: serviceResult, message: 'success' });
    });
}
