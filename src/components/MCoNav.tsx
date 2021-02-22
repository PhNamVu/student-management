import React, { useState } from 'react'
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Avatar } from 'baseui/avatar'
import { useAuth } from '../hooks/use-auth'

export const McoNav = () => {
  const [collapsed, setCollapsed] = useState(true)
  const {
    state: { user },
    signout,
  }: any = useAuth()
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      <Navbar light expand="md" style={{ backgroundColor: 'white' }}>
        <Container fluid>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar>
            <div className="mr-sm-auto">
              <Nav navbar className="header-links btn">
                <NavItem>
                  <NavLink href="/magazine">Magazine</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contribution">Contribution</NavLink>
                </NavItem>
              </Nav>
            </div>
            <Nav navbar className="ml-sm-auto">
              <NavItem className="avatar">
                <Avatar
                  name= {user.displayName}
                  size="scale1000"
                />
                  <NavLink href="/" onClick={signout}><img src="/icon/logout.svg" width={16} height={16} /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

