const { gql } = require('apollo-server')

module.exports = gql`

   type Ingredient {
    
    id: ID 
    name: String!
    file: File!
    
   }
   
  extend type Mutation {

      ingredientCreate(
        name: String!
        file: Upload!
      ):Ingredient

       
   }

`;

