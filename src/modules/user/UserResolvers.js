const UserRepository = require('../../repositories/UserRepository')


const resolvers = {

    Query: {
        users() {
            return UserRepository.index()
        },

        user(_, { id }) {
            return UserRepository.show(id)
        }
    },

    Mutation: {
        userCreate(_, args) {
            return UserRepository.store(args)
        },

        userUpdate(_, { id, data }) {

            return UserRepository.update(id, data)

        },

        userDestroy(_, { id }) {

            return UserRepository.destroy(id)

        }

    }

}

module.exports = resolvers;