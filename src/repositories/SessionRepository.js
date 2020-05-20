const { User } = require('../models')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
class SessionRepository {

    async signin({ email, password }) {

        try {
            const user = await User.findOne({ where: { email } })

            if (!user) {
                throw new Error('User not found')
            }
            if (!(await this.checkPassword(password, user.password))) {

                throw new Error('Credentials invalid')
            }

            const userInfo = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            return {
                ...userInfo,
                token: this.genererateToken(user)
            }

        } catch (e) {
            throw new Error(e)
        }
    }

    async genererateToken(user) {

        const now = Math.floor(Date.now() / 1000)
        const expiresIn = now + (7 * 24 * 60 * 60)
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            iat: now,
            expire: expiresIn
        }

        return await jwt.sign(payload, process.env.AUTH_SECRET, { expiresIn: expiresIn })

    }

    async checkPassword(password, password_hash) {

        return bcrypt.compare(password, password_hash)

    }


}

module.exports = new SessionRepository()