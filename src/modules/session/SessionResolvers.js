const SessionRepository = require('../../repositories/SessionRepository')


const resolvers = {

    Query: {
        authenticate(_, { data }) {

            return SessionRepository.signin(data)
        },


    },

}

module.exports = resolvers;