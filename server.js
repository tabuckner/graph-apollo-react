const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const SERVER_PORT = process.env.PORT || 5000;

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
