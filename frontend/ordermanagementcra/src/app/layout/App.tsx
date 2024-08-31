import './styles.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import CustomersDashboard from '../../features/customers/customersDashboard/CustomersDashboard';
import React from 'react';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {},
  }),
  uri: 'http://localhost:5263/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CustomersDashboard />
    </ApolloProvider>
  );
}

export default App;
