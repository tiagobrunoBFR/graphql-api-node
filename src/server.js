require('dotenv').config()
const { ApolloServer } = require('apollo-server')

require('./database')

const server = new ApolloServer({
    modules: [
        require('./modules/user')
    ]
})

server.listen(process.env.APP_SERVICE_PORT)