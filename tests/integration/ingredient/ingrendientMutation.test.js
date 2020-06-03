const truncate = require('../../utils/truncate')
const server = require('../../../src/app')
const { Ingredient_create } = require('./IngredientClient')
const { createTestClient } = require('apollo-server-testing');
const { mutate } = createTestClient(server);
const faker = require('faker')
const fs = require('fs');


describe('Module ingredient all mutations', () => {

    beforeEach(async () => {
        return await truncate();
    })

    it('should insert a ingrendient with upload of file', async () => {

        var formData = {
            createReadStream: fs.createReadStream(__dirname + '/tomato.png', { encoding: 'utf8' }),
            filename: 'tomato.png',
            mimetype: 'png',
            encoding: '123'
        }

        const name = faker.name.findName();

        const result = await mutate({
            mutation: Ingredient_create, variables: {
                name: name,
                file: formData
            },
            context: {
                useMultipart: true
            }
        });

        expect(result.data.ingredientCreate).not.toBe(null)

    })


})