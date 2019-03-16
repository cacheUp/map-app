const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(`${process.env.DB_CONFIG}`, {
    useNewUrlParser: true
  })
  .then(() => console.log("db connected"))
  .catch(err => console.error(err));

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`server is listening on ${url}`);
});
