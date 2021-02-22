// Run 'npx kill-port 3000' to disable port 3000
import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/client'

import { Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import { LoginPage } from './Pages/LoginPage'
import { CreateMagazine } from './Pages/CreateMagazine'
import { ToasterContainer } from 'baseui/toast'

import MagazinesPage from './Pages/MagazinesAdmin'
import MagazinesStudentPage from './Pages/MagazinesStudent'
import ContributeMgzPage from './Pages/ContributeMgz'

import { AdminNav } from './components/AdminNav'

import { useAuth } from './hooks/use-auth'
import createUnAuthClient from './apollo/unauth-client'
import createAuthApolloClient from './apollo/auth-client'

import {PageNotFound} from './Pages/PageNotFound'

function App() {
  const { state } = useAuth()

  if (!state.user) {
    const unAuthClient = createUnAuthClient()
    return (
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
    )
  } else {
    if (
      !state?.customClaims?.claims.hasOwnProperty(
        'https://hasura.io/jwt/claims'
      )
    ) {
      const unAuthClient = createUnAuthClient()
      return (
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
            <ToasterContainer>
              <ApolloProvider client={client}>
                <AdminNav/>
                <Container
                  fluid
                  style={{ backgroundColor: '#F8F8F8', minHeight: '100vh' }}
                >
                  <Routes>
                    <Route path="/" element={<MagazinesPage />} />
                    <Route path="/magazine/add" element={<CreateMagazine />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/ad/magazine" element={<MagazinesPage />} />
                    <Route path="/stu/magazine" element={<MagazinesStudentPage />} />
                    <Route path="/ad/contribute/:idMgz/:mgzTitle" element={<ContributeMgzPage/>} />
                  </Routes>
                </Container>
              </ApolloProvider>
            </ToasterContainer>
        )
      } else {
        return null
      }
    }
  }
}

export default App
