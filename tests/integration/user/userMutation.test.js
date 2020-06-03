const truncate = require('../../utils/truncate')
const factory = require('../../factories')
const faker = require('faker')
const server = require('../../../src/app')
const { User_Create, User_Upadate, User_Delete } = require('./UserClient')
const { createTestClient } = require('apollo-server-testing');
const { mutate } = createTestClient(server);



describe('Module user all mutations', () => {

    beforeEach(async () => {
        return await truncate();
    })

    it('should insert a user with name and email valid', async () => {

        const name = faker.name.findName();

        const result = await mutate({
            mutation: User_Create, variables: {
                name: name,
                email: faker.internet.email(),
                password: faker.internet.password()
            }
        });
        expect(result.data.userCreate).not.toEqual(null);


    })

    it('should update a user by id and return the datas updated', async () => {


        const result = await mutate({
            mutation: User_Upadate, variables: {
                id: 1,
                email: faker.internet.email(),
                name: faker.name.findName()
            }
        });

        expect(result.email).not.toEqual(null)

    })


    it('should delete a user by id and return null than find user by id deleted', async () => {

        const result = await mutate({
            mutation: User_Delete, variables: {
                id: 1,
            }
        });

        expect(result.data.userDestroy).toBe(true)


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