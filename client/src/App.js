import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql' // TODO: Move to env var.
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>It Works</h1>
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
