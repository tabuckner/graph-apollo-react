const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
const axios = require('axios');

const API_URL = 'https://api.spacexdata.com/v3';

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLInt },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const response = await axios.get(`${API_URL}/launches`);
        return response.data;
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      async resolve(parent, args) {
        const response = await axios.get(`${API_URL}/launches/${args.flight_number}`);
        return response.data;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

