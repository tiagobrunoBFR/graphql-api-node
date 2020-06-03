const { Ingredient } = require('../models')

class IngredientRepository {

    async store(name, file_id) {
        try {
            const ingredient = Ingredient.create({
                name: name,
                file_id: file_id
            })

            return ingredient
        } catch (e) {
            throw new Error(e)
        }
    }

}

module.exports = new IngredientRepository()