const { gql } = require('apollo-server')

module.exports = gql`

extend type Query {

 authenticate(data:UserLogin!): User
 
}
  
 input  UserLogin{
     
     email: String!
     password: String!

 } 


`