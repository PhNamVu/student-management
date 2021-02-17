import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import { LoginPage } from './Pages/LoginPage'
import { CreateMagazine } from './Pages/CreateMagazine'
import { ToasterContainer } from 'baseui/toast'
import { NavBar } from './components/AdminNav'

import { useAuth } from './hooks/use-auth'
import createUnAuthClient from './apollo/unauth-client'
import createAuthApolloClient from './apollo/auth-client'
import {PageNotFound} from './Pages/PageNotFound'

function App() {
  const { state } = useAuth()

  if (!state.user) {
    const unAuthClient = createUnAuthClient()
    return (
      <BrowserRouter>
        <ToasterContainer>
          <ApolloProvider client={unAuthClient}>
            <Container
              fluid
              style={{ backgroundColor: '#D1DCE1', minHeight: '100vh' }}
            >
              <Routes> 
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              
              
            </Container>
          </ApolloProvider>
        </ToasterContainer>
      </BrowserRouter>
    )
  } else {
    if (
      !state?.customClaims?.claims.hasOwnProperty(
        'https://hasura.io/jwt/claims'
      )
    ) {
      const unAuthClient = createUnAuthClient()
      return (
        <BrowserRouter>
          <ToasterContainer>
            <ApolloProvider client={unAuthClient}>
              <Container
                fluid
                style={{ backgroundColor: '#D1DCE1', minHeight: '100vh' }}
              >
                <Routes> 
                  <Route path="/" element={<LoginPage />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
                
              </Container>
            </ApolloProvider>
          </ToasterContainer>
        </BrowserRouter>
      )
    }
    {
      const client = createAuthApolloClient(state.user)

      const role =
        state.customClaims.claims['https://hasura.io/jwt/claims'][
          'x-hasura-default-role'
        ]
      if (role === 'admin') {
        return (
          <BrowserRouter>
            <ToasterContainer>
              <ApolloProvider client={client}>
                <NavBar></NavBar>
                <Container
                  fluid
                  style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}
                >
                  <Route path="/magazine/add" element={<CreateMagazine />} />
                </Container>
              </ApolloProvider>
            </ToasterContainer>
          </BrowserRouter>
        )
      } else {
        return null
      }
    }
  }
}

export default App
