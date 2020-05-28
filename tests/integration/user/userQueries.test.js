const UserRepository = require('../../../src/repositories/UserRepository')
const truncate = require('../../utils/truncate')
const factory = require('../../factories')
const server = require('../../../src/app')
const { User_ALL, User_Find_ID } = require('./ClientUser')

const { createTestClient } = require('apollo-server-testing');
const { query } = createTestClient(server);




describe('Module User tests all queries', () => {

    beforeEach(async () => {
        await truncate();
    })


    it('should find user by id and verify if exists erros', async () => {

        const user = await factory.create('User')

        const result = await query({
            query: User_Find_ID, variables: {
                id: user.id
            }
        });
        expect(result.errors).toBe(undefined)
    })

    it('should list of all users and verify if exists erros', async () => {


        await factory.create('User')

        const result = await query({
            query: User_ALL
        });

        expect(result.errors).toBe(undefined)
    })

})