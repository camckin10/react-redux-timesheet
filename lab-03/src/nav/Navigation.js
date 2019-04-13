import React from 'react';
import PropTypes from 'prop-types';
import {Nav, Navbar, NavItem } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

//told comp to render bootstrap for header
//nav component w/ 3 navigation tabs
//each nav item linked to react-router; React-router will switch the current URL to a new value
class Navigation extends React.Component {
  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Timesheetz
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
          <NavItem><NavLink to="/employees">Employees</NavLink></NavItem>
          <NavItem><NavLink to="/timesheets">Timesheets</NavLink></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;