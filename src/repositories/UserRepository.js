const User = require('../models/User')

module.exports = {

    async index() {
        const users = await User.findAll()

        return users
    },

    async store(request) {

        const { name, email, password } = request.data

        return await User.create({ name, email, password })

    },

    async find(id) {
        if (!id) return null
        return await User.findByPk(id)
    },

    async update(id, { name, email }) {

        return User.update(
            { name: name, email: email },
            {
                where: { id: id },
                returning: true,
                plain: true
            })

    },

    async destroy(id) {

        return await User.destroy({
            where: {
                id
            }
        })

    }




}