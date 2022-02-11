import { Router } from 'express';
import { UserController } from '../../controllers';

export const userRouter = (userController: UserController) => {
    const userRouter = Router({ mergeParams: true });

    userRouter.route('').get(userController.getUsers).post(userController.createUser);
    userRouter.route('/:id').get(userController.getUserById).patch(userController.updateUser).delete(userController.deleteUser);

    return userRouter;
};
