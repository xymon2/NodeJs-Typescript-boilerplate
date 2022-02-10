import { Router } from 'express';
import { UserController } from '../controllers';

export const userRouter = (userController: UserController): Router => {
    const userRouter = Router();

    userRouter.get('/users', userController.getUsers);
    userRouter.post('/', userController.createUser);
    userRouter.route('/:id').get(userController.getUserById).patch(userController.updateUser).delete(userController.deleteUser);

    return userRouter;
};
