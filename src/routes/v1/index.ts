import { Router } from 'express';
import { UserController } from '../../controllers';
import { UserModel } from '../../models';
import { UserService } from '../../services';
import { userRouter } from './user.route';

export const routeV1: Router = Router({ mergeParams: true });

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

routeV1.use(`/users`, userRouter(userController));
