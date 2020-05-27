const SessionRepository = require('../../../src/repositories/SessionRepository')
const truncate = require('../../utils/truncate')
const factory = require('../../factories')
const faker = require('faker')


describe('Module Athentication', () => {

    beforeEach(async () => {
        await truncate();
    })

    it('Should authenticate with invalid credentials and return Error: Credentials invalid', async () => {

        await factory.create('User')

        const data = {

            email: faker.internet.email(),
            password: faker.internet.password()

        }

        try {
            await SessionRepository.signin(data)

        } catch (e) {

            expect(e.message).toBe("Error: Credentials invalid");

        }

    })

    it('should return jwt token when credential of user is valid', async () => {

        const user = await factory.create('User', { password: '123456' })

        const data = {

            email: user.email,
            password: "123456"

        }

        const response = await SessionRepository.signin(data)

        expect(response).toHaveProperty("token")


    })

})