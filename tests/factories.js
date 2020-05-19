const { factory } = require('factory-girl')
const { User } = require('../src/models')

factory.define('User', User, {
    name: 'Tiago',
    email: 'tiago@email.com',
    password: '123456'
})

module.exports = factory