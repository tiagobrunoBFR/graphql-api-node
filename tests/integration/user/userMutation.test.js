const UserRepository = require('../../../src/repositories/UserRepository')
const truncate = require('../../utils/truncate')
const factory = require('../../factories')
const faker = require('faker')

describe('Module user all mutations', () => {

    beforeEach(async () => {
        return await truncate();
    })

    it('should insert a user with name and email valid', async () => {

        const user = await factory.create('User', { email: 'tiago@email.com' })

        expect(user.email).toBe('tiago@email.com')

    })

    it('should update a user by id and return the datas updated', async () => {

        const request_update = {
            email: faker.internet.email(),
            name: faker.name.findName()
        }

        const user = await factory.create('User')

        return await UserRepository.update(user.id, request_update)
            .then((resp) => {

                expect(resp.email).toEqual(request_update.email)

            })
    })


    it('should delete a user by id and return null than find user by id deleted', async () => {

        const user_delete = await factory.create('User')

        const user_id = user_delete.id

        UserRepository.destroy(user_delete.id)

        const user = await UserRepository.show(user_id)

        expect(user).toEqual(null)

    })

    it('When the name no is present should return erro Name is required', async () => {

        try {
            await factory.create('User', {
                name: ''
            })

        } catch (e) {

            expect(e.message).toBe("Name is required");

        }

    })

    it('When the e-mail no is present should return erro E-mail invalid', async () => {

        try {
            await factory.create('User', {
                email: ''
            })

        } catch (e) {

            expect(e.message).toBe("E-mail invalid");

        }

    })




})