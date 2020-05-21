const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const { User } = require('../models')

module.exports = {

    isEmailValid(email) {
        if (!email)
            return false;

        if (email.length > 254)
            return false;

        var valid = emailRegex.test(email);
        if (!valid)
            return false;

        // Further checking of some things regex can't handle
        var parts = email.split("@");
        if (parts[0].length > 64)
            return false;

        var domainParts = parts[1].split(".");
        if (domainParts.some(function (part) { return part.length > 63; }))
            return false;

        return true;
    },

    // emailUnique(email, id = null) {

    //     const user = User.findAll({ where: { email } })
    //     console.log(user[0])
    //     if (user.length > 0) {
    //         console.log("entou no falso")

    //         return false
    //     } else {
    //         console.log("entrou no true")
    //     }


    //     return true

    // }


}