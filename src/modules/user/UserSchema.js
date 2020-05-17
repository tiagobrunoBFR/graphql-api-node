const { gql } = require('apollo-server')

module.exports = gql`

   type Query {

    users:[User]
    user(id:Int!):User
    }
    
    type User {
    
    id: ID 
    name: String
    email: String
    password: String
    
   }
   
   input UserInput {

    name: String
    email: String
    password: String
    
   }

 
   type Mutation {

      userCreate(
          data:UserInput!
      ):User

     userUpdate(
         data:UserInput
         id:Int
     ):User

     userDestroy(
         id: Int
     ):User
     
   }

`;

