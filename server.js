const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const SERVER_PORT = process.env.GRAPHQL_PORT || 5000;

const app = express();

// Allow CORS
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
