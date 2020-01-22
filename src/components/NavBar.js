import React from 'react';
import { Menu, Icon } from 'semantic-ui-react'
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
    <Menu color='teal' inverted >
      <Menu.Item header>COLLABO</Menu.Item>
      <Menu.Item as={Link} to="/">Home<Icon fitted name='home' /></Menu.Item>
      <Menu.Item as={Link} to="/users" onClick={clearUserState} >Users <Icon fitted name='users' /></Menu.Item>
      <Menu.Item as={Link} to="/projects" onClick={clearProjectState}>Projects <Icon fitted name='tasks' /> </Menu.Item>
      <Menu.Item as={Link} to="/projects/new">New Project <Icon fitted name='plus circle' /></Menu.Item>
      <Menu.Item as={Link} to="/" onClick={handleLogout} position='right' >Logout <Icon fitted name='sign-out' /></Menu.Item>
    </Menu>
    :
    <Menu color='teal' inverted>
      <Menu.Item header>COLLABO</Menu.Item>
      <Menu.Item as={Link} to="/">Home <Icon fitted name='home' /></Menu.Item>
      <Menu.Item as={Link} to="/users" onClick={clearUserState}>Users <Icon fitted name='users' /></Menu.Item>
      <Menu.Item as={Link} to="/projects" onClick={clearProjectState}>Projects <Icon fitted name='tasks' /></Menu.Item>
      <Menu.Item as={Link} to="/login" position='right' >Login <Icon fitted name='sign-in' /></Menu.Item>
    </Menu>
  );
}

export default NavBar;
