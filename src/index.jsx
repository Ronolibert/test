import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './client/createClient.js';
import App from './client/App';

ReactDOM.render(
  <ApolloProvider client={client()}>
    <App />
  </ApolloProvider>,

  document.getElementById('root')
);
