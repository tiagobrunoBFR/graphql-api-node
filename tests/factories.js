const { factory } = require('factory-girl')
const { User, Ingredient } = require('../src/models')
const faker = require('faker')

factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

factory.define('Ingredient', Ingredient, {
    name: faker.name.findName(),
})

module.exports = factory