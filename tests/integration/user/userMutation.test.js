const UserRepository = require('../../../src/repositories/UserRepository')
const truncate = require('../../utils/truncate')
const factory = require('../../factories')

describe('Module user all mutations', () => {

    beforeEach(async () => {
        return await truncate();
    })

    it('should insert a user', async () => {


        const user = await factory.create('User', { email: 'tiago@email.com' })

        expect(user.email).toBe('tiago@email.com')

    })

    it('should update user', async () => {

        const request_update = {
            email: 'updat2e@email.com',
            name: 'new update'
        }

        const user = await factory.create('User')

        return await UserRepository.update(user.id, request_update)
            .then((resp) => {

                expect(resp.email).toEqual(request_update.email)

            })
    })


    it('should delete user by id', async () => {

        const user_delete = await factory.create('User')

        const user_id = user_delete.id

        UserRepository.destroy(user_delete.id)

        const user = await UserRepository.show(user_id)

        expect(user).toEqual(null)

    })

})