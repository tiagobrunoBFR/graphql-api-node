const jwt = require('jsonwebtoken')

module.exports = ({ req }) => {
    let user = null


    const test = process.env.NODE_ENV === 'test' ? true : false

    if (test) {
        user = { id: 1, name: 'testes', email: 'teste@email.com' }
    } else {

        const auth = req.headers.authorization
        const token = auth && auth.substring(7)

        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.AUTH_SECRET)
                if (new Date(decoded.expire * 1000) > new Date()) {
                    user = decoded
                }
            } catch (e) {
            }

        }
    }

    return {
        user,
        verifyToken() {
            if (!user) throw new Error('invalid token')
        }

    }


}