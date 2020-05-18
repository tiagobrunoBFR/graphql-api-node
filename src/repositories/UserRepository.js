const { User } = require('../models')

module.exports = {

    async index() {
        try {

            const users = await User.findAll()

            return users

        } catch (e) {
            throw new Error(e)
        }
    },

    async store(request) {

        try {

            const { name, email, password } = request.data

            return await User.create({ name, email, password })


        } catch (e) {
            throw new Error(e)
        }

    },

    async show(id) {

        try {

            return await User.findByPk(id)

        } catch (e) {
            throw new Error(e)
        }
    },

    async update(id, { name, email }) {

        try {

            const user = await this.show(id)
            user.name = name
            user.email = email
            await user.save()
            return user

        } catch (e) {
            throw new Error(e)
        }

    },

    async destroy(id) {

        try {

            return await User.destroy({
                where: {
                    id
                }
            })

        } catch (e) {
            throw new Error(e)
        }

    }




}