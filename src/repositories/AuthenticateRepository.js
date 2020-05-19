const { User } = require('../models')

class AuthenticateRepository {

    async  signin({ email, password }) {

        try {
            const user = await User.findOne({ where: { email } })

            if (!user) {
                return 401
            }
            if (!(await user.checkPassword(password))) {

                return 401
            }

            return { status: 200, ...user, token: user.generateToken() }

        } catch (e) {
            throw new Error(e)
        }
    }

}

module.exports = new AuthenticateRepository()