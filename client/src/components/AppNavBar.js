import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import { toggleNavBar } from '../actions/navBarActions';

class AppNavBar extends Component {

  render() {
    const { isNavBarToggled } = this.props.isNavBarToggled;
    
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">2018 Hacktoberfest Leaderboard</NavbarBrand>
            <NavbarToggler onClick={this.props.toggleNavBar} />
            <Collapse isOpen={isNavBarToggled}>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/austinwk">
                  Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isNavBarToggled: state.isNavBarToggled
});

export default connect(mapStateToProps, { toggleNavBar })(AppNavBar);