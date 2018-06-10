/*globals module: false */
import React  from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:5050/graphql',
})


const render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
    document.getElementById('root'),
  )
}

// Webpack Hot Module Replacement API
hot(module)(render)

render()
