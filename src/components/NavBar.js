import React from 'react';
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
    <nav style={{ display: 'flex', justifyContent: 'space-evenly', color:'white', backgroundColor:'blue' }}>
      <Link to="/">Home</Link>
      <Link to="/users" onClick={clearUserState} >Users</Link>
      <Link to="/projects" onClick={clearProjectState}>Projects </Link>
      <Link to="/projects/new">NewProject</Link>
      <Link to="/" onClick={handleLogout}>Logout</Link>
    </nav>
    :
    <nav style={{ display: 'flex', justifyContent: 'space-evenly', color:'white', backgroundColor:'blue' }}>
      <Link to="/">Home</Link>
      <Link to="/users" onClick={clearUserState}>Users</Link>
      <Link to="/projects" onClick={clearProjectState}>Projects</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default NavBar;
