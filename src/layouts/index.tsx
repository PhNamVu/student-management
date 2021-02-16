import React from 'react'
import { Container } from 'reactstrap'
import { NavBar } from './nav'
import { Magazines } from '../Pages/Magazines'

export const Layout = (props: any) => {
  return (
    <>
      <Container fluid>
        <NavBar />
        <main>
          <Magazines />
        </main>
        
      </Container>
    </>
  )
}
