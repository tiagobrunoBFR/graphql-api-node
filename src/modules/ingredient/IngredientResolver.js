const IngredientRepository = require('../../repositories/IngredientRepository')
const FileRepository = require('../../repositories/FileRepository')
const path = require('path')

const resolvers = {

    Mutation: {

        async  ingredientCreate(_, args) {

            const upload_path = path.resolve('uploads', 'ingredient')
            const { file, name } = await args;
            const file_create = await FileRepository.store(file, upload_path)
            return IngredientRepository.store(name, file_create.id)
        },

    }

}

module.exports = resolvers;