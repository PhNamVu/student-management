import React, { useState } from 'react'
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap'
import { Avatar } from 'baseui/avatar'
import { useAuth } from '../../hooks/use-auth'
import { Link } from 'react-router-dom'

export const AdminNav = () => {
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
              <Nav navbar >
                <NavItem className="header-links btn">
                  <Link to="/users">Account</Link>
                </NavItem>
                <NavItem className="header-links btn">
                  <Link to="/magazines">Magazine</Link>
                </NavItem>
                <NavItem className="header-links btn">
                  <Link to="/">Chart</Link>
                </NavItem>
              </Nav>
            </div>
            <Nav navbar className="ml-sm-auto">
              <NavItem className="avatar">
                <Avatar
                  name= {user.displayName}
                  size="scale1000"
                />
                  <Link to="/" onClick={signout}>
                    <img src="/icon/logout.svg" 
                    className="ml-2"
                    width={29} height={31} 
                    />
                  </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Navbar
