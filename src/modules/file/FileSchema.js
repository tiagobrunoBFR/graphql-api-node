const { gql } = require('apollo-server')

module.exports = gql`

scalar Upload

type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

#   input Upload {
#     filename: String!
#     mimetype: String!
#     encoding: String!
#   }

`