const {  gql } = require('apollo-server')

const typeDefs = gql`
  type mainCard {
    title: String!
    image: String!
  }

  type animal {
    id: ID!
    image: String!
    title: String!
    rating: Float!
    price: String!
    description: [String!]!
    stock: Int!
    slug: String!
    onSale: Boolean!
    category: category
  }

  type category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [animal!]!
  }

  type Query {
    mainCards: [mainCard]
    animals: [animal!]!
    animal(slug: String!): animal
    categories: [category!]!
    category(slug: String!): category
  }

  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float!
      price: String!
      description: [String!]!
      stock: Int!
      slug: String!
      onSale: Boolean!
      category: String
    ): animal

    removeAnimal(id: ID!): Boolean!
  }
`

module.exports = typeDefs;
