const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require('mongoose');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async() =>{
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });
  
  await server.start()
  server.applyMiddleware({ app });

  //gives link to tests routes
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
} 

//call start server
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ATX-movie-gear', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
