const UserRepository = require('../../repositories/UserRepository')


const resolvers = {

    Query: {
        users(_, args, ctx) {
            ctx && ctx.verifyToken()
            return UserRepository.index()
        },

        user(_, { id }, ctx) {
            ctx && ctx.verifyToken()
            return UserRepository.show(id)
        }
    },

    Mutation: {
        userCreate(_, args) {
            return UserRepository.store(args)
        },

        userUpdate(_, { id, data }, ctx) {
            ctx && ctx.verifyToken()
            return UserRepository.update(id, data)

        },

        userDestroy(_, { id }, ctx) {
            ctx && ctx.verifyToken()
            return UserRepository.destroy(id)

        }

    }

}

module.exports = resolvers;