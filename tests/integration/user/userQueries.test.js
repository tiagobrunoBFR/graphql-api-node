const UserRepository = require('../../../src/repositories/UserRepository')
const truncate = require('../../utils/truncate')
const factory = require('../../factories')

describe('Module User tests all queries', () => {

    beforeEach(async () => {
        await truncate();
    })


    it('should find user by id and return his id', async () => {

        const user = await factory.create('User')

        return await UserRepository.show(user.id).then((resp) => {
            expect(resp.id).toEqual(user.id)
        })

    })

    it('should list of all users and verify if length is bigger than 0', async () => {


        await factory.create('User')

        return await UserRepository.index().then((resp) => {

            expect(resp.length).toBeGreaterThan(0)

        })

    })

})