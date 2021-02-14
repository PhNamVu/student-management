// Run 'npx kill-port 3000' to disable port 3000
import React from 'react'
import './App.css'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { Users } from './components/Users'
import { Layout } from './layouts'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://fun-whale-23.hasura.app/v1/graphql',
  }),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout style={{ width: "100%", backgroundColor: "black" }} />
    </ApolloProvider>
  )
}

export default App
