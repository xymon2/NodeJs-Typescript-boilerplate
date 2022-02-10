import { Router } from 'express';
import { send } from 'process';
import { UserController } from '../controllers';
import { UserModel } from '../models';
import { UserService } from '../services';

import { userRouter } from './user.route';

export const routes = (req: any, res: any, next: any) => {
    console.log(req.url);
    const routes = Router({ mergeParams: true });

    const userModel = new UserModel();

    const userService = new UserService(userModel);

    const userController = new UserController(userService);

    // routes.use(`/users`, userRouter(userController));
    routes.get(`/users`, () => {
        console.log('?dsad');
        return 'dsadsa';
    });
    return res.send('dsdsdasdsa');
    return routes;
};
