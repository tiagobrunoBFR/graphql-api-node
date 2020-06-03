const gql = require('graphql-tag');

const User_Create = gql`
  mutation (
      $name: String! 
      $email:String! 
      $password: String!
  ){
    userCreate (
       data:{
           name: $name
           email: $email
           password: $password
       }     
    ){
        id
        name
    } 
  } 
`;

const User_Upadate = gql`
  mutation (
      $id: Int!
      $name: String! 
      $email:String! 
  ){
    userUpdate (
       id: $id, 
       data:{
           name: $name
           email: $email
       }     
    ){
        id
        name
    } 
  } 
`;

const User_Delete = gql`
mutation (
    $id: Int!
   
){
    userDestroy (
     id: $id
     )
} 
`;

const User_Find_ID = gql`
  query (
      $id: Int!
  ){
    user (
       id: $id, 
          
    ){
        id
        name
        email
    } 
  } 
`;

const User_ALL = gql`
  query{
    users {
        id
        name
        email
    } 
  } 
`;


module.exports = { User_Create, User_Upadate, User_Delete, User_ALL, User_Find_ID }

