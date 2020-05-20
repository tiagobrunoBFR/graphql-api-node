const jwt = require('jsonwebtoken')

module.exports = ({ req }) => {

    const auth = req.headers.authorization
    const token = auth && auth.substring(7)

    let user = null
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.AUTH_SECRET)
            if (new Date(decoded.expire * 1000) > new Date()) {
                user = decoded
            }
        } catch (e) {
        }

    }
    return {
        user,
        verifyToken() {
            if (!user) throw new Error('invalid token')
        }

    }


}