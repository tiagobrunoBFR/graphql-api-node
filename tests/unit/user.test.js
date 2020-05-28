const factory = require('../factories')

const truncate = require('../utils/truncate')
const bcrypt = require('bcryptjs')

describe("Tests unit user", () => {

    beforeEach(async () => {
        await truncate();
    })

    it("should encrypts the user password", async () => {

        const user = await factory.create('User', { password: '123456' })


        const compareHash = await bcrypt.compare("123456", user.password);

        expect(compareHash).toBe(true);

    })

})