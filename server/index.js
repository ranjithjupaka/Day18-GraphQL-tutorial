const { ApolloServer } = require('apollo-server');
const typeDefs =require('./schema');
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query');
const animal = require('./resolvers/animal');
const category = require('./resolvers/category');
const { mainCards, animals, categories } = require('./db')


const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, category, animal,Mutation },
  context: { mainCards, animals, categories },
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})