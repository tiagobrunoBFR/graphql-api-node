const gql = require('graphql-tag');

const Ingredient_create = gql`
  mutation (
      $name: String! 
      $file: Upload!
  ){
    ingredientCreate (
      name: $name
      file: $file   
    ){
        id
        name
    } 
  } 
`;


module.exports = { Ingredient_create }

