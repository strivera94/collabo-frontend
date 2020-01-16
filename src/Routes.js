import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/HomePage';
import NewProjectForm from './pages/NewProjectForm';
import ProjectsContainer from './pages/ProjectsContainer';
import UsersContainer from './pages/UsersContainer';
import ProjectDetail from './pages/ProjectDetail';
import UserDetail from './pages/UserDetail'
import EditProfileForm from './pages/EditProfileForm'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/projects" component={ProjectsContainer} />
      <Route exact path="/projects/new" component={NewProjectForm} />
      <Route exact path="/projects/:id" component={ProjectDetail} />
      <Route exact path="/users/edit" component={EditProfileForm} />
      <Route exact path="/users" component={UsersContainer} />
      <Route exact path="/users/:id" component={UserDetail} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;