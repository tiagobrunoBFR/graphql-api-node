require('dotenv').config()
const { ApolloServer } = require('apollo-server')
// const { importSchema } = require('graphql-import')
// const resolvers = require('./config/graphql/resolvers/Resolver')

require('./database')

//const schemaPath = 'src/config/graphql/schema/index.graphql'
// const server = new ApolloServer({
//     typeDefs: importSchema(schemaPath),
//     resolvers,
// })

const server = new ApolloServer({
    modules: [
        require('./modules/user')
    ]
})

server.listen(3333)