import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './routes/Route.jsx';
import { RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
      <ApolloProvider client={client}>
    <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);