import { Router } from 'express';
import { UserController } from '../controllers';

export const userRouter = (userController: UserController): Router => {
    const userRouter = Router({ mergeParams: true });

    // console.log('userRouter calls');
    // userRouter.route('*').get(() => {
    //     console.log('?');
    // });
    userRouter.route('').get(userController.getUsers).post(userController.createUser);
    userRouter.route('/:id').get(userController.getUserById).patch(userController.updateUser).delete(userController.deleteUser);
    // console.log('huh');
    return userRouter;
};
