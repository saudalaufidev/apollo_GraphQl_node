const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query{
users:[User!]!
posts:[Post!]!
}
type User{
    id:ID!
    name:String
}
type Post{
  id:ID!
  post:String!
  author:User!
}
`;
module.exports = typeDefs;
