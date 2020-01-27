import React, { useEffect } from 'react';
import { List, Grid, Icon, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import projectActions from '../redux/actions/projectActions';
import ProjectDetail from './ProjectDetail';

const ProjectsContainer = (props) => {
  
  const projects = useSelector(state => state.projects.projects)
  const project = useSelector(state => state.projects.project)
  const active = useSelector(state => state.projects.filter_by_active)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(projectActions.getProjects());
  })

  const renderProjects = () => {
    if(active){
      const activeProj = projects.filter(project => !project.completed)
      return activeProj.map(project => 
        <List.Item key={project.id} onClick={()=>
          {dispatch(projectActions.showProject(project.id))
          dispatch(projectActions.getCollabs(project.id))}}>
          <List.Content>
            <List.Header> {project.title ? project.title : "Untitled Project"} | {project.completed ? "Completed" : "Active"}  </List.Header>
            <List.Description>{project.description}</List.Description>
          </List.Content>
        </List.Item>)
    }else{
    return projects.map(project => 
      <List.Item key={project.id} onClick={()=>
        {dispatch(projectActions.showProject(project.id))
        dispatch(projectActions.getCollabs(project.id))}}>
        <List.Content>
          <List.Header> {project.title ? project.title : "Untitled Project"} | {project.completed ? "Completed" : "Active"}  </List.Header>
          <List.Description>{project.description}</List.Description>
        </List.Content>
      </List.Item>)
    }
  }

  const renderProjectDetail = () => {
    return <ProjectDetail project={project} />
  }

  const filterProjects = () => {
    dispatch(projectActions.filterByActive())
  }
  
    return (
      <div>
        {!project.id ? 
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={14} >
        <h1>{!project.id ? "Projects" : null}</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={14} textAlign='right' >
              <Button onClick={filterProjects} size='small' >{ active ? "Filter by Active: On" : "Filter by Active: Off"}
               <Icon size='small' color='grey' name='filter' /></Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={14} >
              <List celled>
              { renderProjects() }
              </List> 
            </Grid.Column>
          </Grid.Row>
        </Grid>
        :
         renderProjectDetail()}
      </div>
    );
  
}

export default ProjectsContainer;
