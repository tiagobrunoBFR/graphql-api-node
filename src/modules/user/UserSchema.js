const { gql } = require('apollo-server')

module.exports = gql`

   extend type Query {

    users:[User]
    user(id:Int!):User
    }
    
    type User {
    
    id: ID 
    name: String!
    email: String!
    token: String
    
   }
   
   
   input UserInput {

    name: String!
    email: String!
    password: String!
    
   }

   input UserUpdateInput{
    name: String
    email: String
   }
 
   type Mutation {

      userCreate(
          data:UserInput!
      ):User

     userUpdate(
         data:UserUpdateInput
         id:Int
     ):User

     userDestroy(
         id: Int
     ):Boolean
     
   }

`;

