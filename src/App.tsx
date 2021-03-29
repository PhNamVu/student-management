// Run 'npx kill-port 3000' to disable port 3000
import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/client'

import { Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import { LoginPage } from './Pages/LoginPage'
import { CreateMagazine } from './Pages/Admin/CreateMagazine'
import { ToasterContainer } from 'baseui/toast'

import MagazinesListPage from './Pages/MagazinesList'
import EditContributePage from './Pages/Student/EditContribute'
import SubmitContributePage from './Pages/Student/SubmitContribution'

import ContributionList from './Pages/ContributionListGeneral'
import StudentContributionsList from './Pages/Student/ContributionsList'
import GuestContributionsList from './Pages/Guest/ContributionsList'

import UserList from './Pages/Admin/UsersList'
import ChartPage from './Pages/Chart'

import { AdminNav } from './components/NavigationBar/AdminNav'
import { StudentNav } from './components/NavigationBar/StudenNav'
import { GuestNav } from './components/NavigationBar/GuestNav'
import { ManagerNav } from './components/NavigationBar/ManagerNav'
import { McoNav } from './components/NavigationBar/MCoNav'

import { useAuth } from './hooks/use-auth'
import createUnAuthClient from './apollo/unauth-client'
import createAuthApolloClient from './apollo/auth-client'

import {PageNotFound} from './Pages/PageNotFound'
import { EditMagazinePage } from './Pages/Admin/EditMagazine'
import { CreateUserPage } from './Pages/Admin/CreateUserPage'
import { ChatPage } from './Pages/Student/ChatPage'
import { ChatDMPage } from './Pages/Student/ChatDmPage'

function App() {
  const { state } : any = useAuth()

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
      !state.customClaims.claims.hasOwnProperty(
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
                  
                    <Route path="/" element={<ChartPage />} />
                    <Route path="/magazines" element={<MagazinesListPage />} />
                    <Route path="/magazine/add" element={<CreateMagazine />} />
                    <Route path="/user/add" element={<CreateUserPage />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path='magazine/:id/edit'element={<EditMagazinePage />} />
                    <Route path="/contribute/:idMgz/:mgzTitle" element={<ContributionList/>} />
                    <Route path="/users" element={<UserList />} />

                  </Routes>
                </Container>
              </ApolloProvider>
            </ToasterContainer>
        )
      } else if (role === 'student') {
        return (
          <ToasterContainer>
            <ApolloProvider client={client}>
              <StudentNav/>
              <Container
                fluid
                style={{ backgroundColor: '#F8F8F8', minHeight: '100vh' }}
              >
                <Routes>
                  <Route path="/" element={<MagazinesListPage />} /> {/* Navigation Magazine */}
                  <Route path="/contribute/:idMgz/:mgzTitle" element={<StudentContributionsList/>} />
                  <Route path="/contributions" element={<StudentContributionsList/>} /> {/* Navigation My Contributions */}
                  <Route path="/contribution/:id/edit" element={<EditContributePage />} />
                  <Route path="/submitContribute/:idMgz" element={<SubmitContributePage />} />
                  <Route path="chat" element={<ChatPage />}>
                    <Route path="p/:id" element={<ChatDMPage />} /> 
                  </Route>
                </Routes>
              </Container>  
            </ApolloProvider>
          </ToasterContainer>
      )
      }
      else if (role === 'coordinator') {
        return (
          <ToasterContainer>
            <ApolloProvider client={client}>
              <McoNav/>
              <Container
                fluid
                style={{ backgroundColor: '#F8F8F8', minHeight: '100vh' }}
              >
                
                <Routes>

                  <Route path="/" element={<ChartPage />} />
                  <Route path="/magazines" element={<MagazinesListPage />} />

                  <Route path="/contribute/:idMgz/:mgzTitle" element={<ContributionTable />} />
                  <Route path="chat" element={<ChatPage />}>
                    <Route path="p/:id" element={<ChatDMPage />} /> 
                  </Route>
                </Routes>
              </Container>  
            </ApolloProvider>
          </ToasterContainer>
      )
      }
      else if (role === 'guest') {
        return (
          <ToasterContainer>
            <ApolloProvider client={client}>
              <GuestNav/>
              <Container
                fluid
                style={{ backgroundColor: '#F8F8F8', minHeight: '100vh' }}
              >
                <Routes>
                  <Route path="/" element={<MagazinesListPage />} />
                  <Route path="/contribute/:idMgz/:mgzTitle" element={<GuestContributionsList />} />
                </Routes>
              </Container>  
            </ApolloProvider>
          </ToasterContainer>
      )
      }
      else if (role === 'manager') {
        return (
          <ToasterContainer>
            <ApolloProvider client={client}>
              <ManagerNav/>
              <Container
                fluid
                style={{ backgroundColor: '#F8F8F8', minHeight: '100vh' }}
              >
                <Routes>
                  <Route path="/" element={<ChartPage />} />
                  <Route path="/magazines" element={<MagazinesListPage />} />
                  <Route path="/contribute/:idMgz/:mgzTitle" element={<ContributionList/>} />
                </Routes>
              </Container>  
            </ApolloProvider>
          </ToasterContainer>
      )
      }              
      else {
        return null
      }
    }
  }
}

export default App
