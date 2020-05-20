const SessionRepository = require('../../../src/repositories/SessionRepository')
const truncate = require('../../utils/truncate')
const factory = require('../../factories')


describe('Module Athentication', () => {

    beforeEach(async () => {
        await truncate();
    })

    it('Should authenticate with invalid credentials', async () => {

        const user = await factory.create('User')

        const data = {

            email: user.email,
            password: "12345"

        }

        try {
            await SessionRepository.signin(data)

        } catch (e) {

            expect(e.message).toBe("Error: Credentials invalid");

        }

    })

    it('should return jwt token when authenticated', async () => {

        const user = await factory.create('User', { password: '123456' })

        const data = {

            email: user.email,
            password: "123456"

        }

        const response = await SessionRepository.signin(data)

        expect(response).toHaveProperty("token")


    })

})