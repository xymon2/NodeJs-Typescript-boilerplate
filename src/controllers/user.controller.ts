import { NextFunction, Request, Response, Router } from 'express';
import { UserService } from '../services';

export const userRouter = (userService: UserService): Router => {
    const userRouter = Router();

    userRouter.get('/users', async (req: Request, res: Response, next: NextFunction) => {
        const query = 'haha';
        const id = 'test';
        try {
            const serviceResult = await userService.getUsers(id, query);
            res.send(serviceResult);
        } catch (err) {
            next(err);
        }
    });
    return userRouter;
};
