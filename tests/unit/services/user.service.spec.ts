import { UserService } from '../../../src/services';
import { UserModel } from '../../../src/models';

describe('Test services/user.service.ts', () => {
    let userService: UserService;
    let mockedUserModel: UserModel;

    beforeAll(() => {
        mockedUserModel = {
            db: [{ id: 'test', username: 'testuser1' }],

            async getUsers() {
                return this.db;
            },
        };

        userService = new UserService(mockedUserModel);
    });

    describe('getUsers function', () => {
        it('should return all users in DB', async () => {
            const result = await userService.getUsers('test', '');
            expect(Array.isArray(result)).toBe(true);
            for (const user of result) {
                expect(user).toHaveProperty('id');
                expect(user).toHaveProperty('username');
            }
            //
        });
    });
});
