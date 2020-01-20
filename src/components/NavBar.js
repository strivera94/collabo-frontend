import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux' ;
import authActions from '../redux/actions/authActions';
import userActions from '../redux/actions/userActions'
import projectActions from '../redux/actions/projectActions';

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logoutUser());
  };
  
  const clearUserState = () => {
    dispatch(userActions.clearUserState());
  };

  const clearProjectState = () => {
    dispatch(projectActions.clearProject())
  }

  const email = useSelector(state => state.currentUser.email)

  return (
    email ?
    <Menu>
      <Menu.Item header>Collabo</Menu.Item>
      <Menu.Item as={Link} to="/">Home</Menu.Item>
      <Menu.Item as={Link} to="/users" onClick={clearUserState} >Users</Menu.Item>
      <Menu.Item as={Link} to="/projects" onClick={clearProjectState}>Projects </Menu.Item>
      <Menu.Item as={Link} to="/projects/new">NewProject</Menu.Item>
      <Menu.Item as={Link} to="/" onClick={handleLogout}>Logout</Menu.Item>
    </Menu>
    :
    <Menu>
      <Menu.Item header>Collabo</Menu.Item>
      <Menu.Item as={Link} to="/">Home</Menu.Item>
      <Menu.Item as={Link} to="/users" onClick={clearUserState}>Users</Menu.Item>
      <Menu.Item as={Link} to="/projects" onClick={clearProjectState}>Projects</Menu.Item>
      <Menu.Item as={Link} to="/login">Login</Menu.Item>
      <Menu.Item as={Link} to="/signup">Signup</Menu.Item>
    </Menu>
  );
}

export default NavBar;
