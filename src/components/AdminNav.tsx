import React, { useState } from 'react'
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Avatar } from 'baseui/avatar'

export const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  return (
    <div>
      <Navbar light expand="md" style={{ backgroundColor: 'white' }}>
        <Container fluid>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <div className="mr-sm-auto">
              <Nav navbar className="header-links btn">
                <NavItem>
                  <NavLink href="/accounts">Account</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/magazine">Magazine</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/chart">Chart</NavLink>
                </NavItem>
              </Nav>
            </div>
            <Nav navbar className="ml-sm-auto">
              <NavItem className="avatar">
                <Avatar
                  name="Minh Truong"
                  size="scale1000"
                  src="https://api.adorable.io/avatars/285/10@adorable.io.png"
                />
                <Button variant="light" style={{ backgroundColor: 'white' }}>
                  <img src="/icon/logout.svg" width={24} height={24} />
                </Button>{' '}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default Navbar
