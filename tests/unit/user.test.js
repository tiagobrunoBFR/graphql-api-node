const UserRepository = require('../../src/repositories/UserRepository')

const truncate = require('../utils/truncate')
const bcrypt = require('bcryptjs')

describe("User", () => {

    beforeEach(async () => {
        await truncate();
    })

    it("shuold encrypt user password", async () => {

        const request = {
            data: {
                name: 'tiago',
                email: 'tiago@email.com',
                password: '123456'
            }

        }

        const user = await UserRepository.store(request)


        const compareHash = await bcrypt.compare("123456", user.password);

        expect(compareHash).toBe(true);

    })

})