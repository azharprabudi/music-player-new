const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./src/schema");

// initialize server setup
const server = new ApolloServer({
  schema,
  debug: process.env.NODE_ENV == "development",
  playground: process.env.NODE_ENV == "development"
});
const app = express();

server.applyMiddleware({
  app,
  path: "/graphql"
});

app.listen(process.env.NODE_PORT || "3000", () =>
  console.log("Server already up")
);
