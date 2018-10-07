import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavBar extends Component {

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Hacktoberfest Leaderboard</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/austinwk/2018_hacktoberfest_participants">
                  Sign up
                  </NavLink>
                </NavItem>
              </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;