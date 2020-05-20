require('dotenv').config({
    path: process.env.NODE_EN === 'test' ? '.env.test' : '.env'
})

const { ApolloServer } = require('apollo-server')

require('./models')

const server = new ApolloServer({
    modules: [
        require('./modules/user'),
        require('./modules/session')
    ]
})

module.exports = server