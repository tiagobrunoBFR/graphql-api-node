const { Model, DataTypes } = require('sequelize')

class User extends Model {

    static init(sequelize) {

        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize
        })

    }

    // static associate(models) {
    //     this.belongsTo(models.User, { foreignKey: 'user_id', as:'owner' })
    // }


}


module.exports = User