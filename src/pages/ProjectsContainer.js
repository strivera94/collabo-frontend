import React, { useEffect } from 'react';
import { List } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import projectActions from '../redux/actions/projectActions';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const ProjectsContainer = (props) => {
  
  const projects = useSelector(state => state.projects.projects)
  const project = useSelector(state => state.projects.project)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(projectActions.getProjects());
  })

  const renderProjects = () => {
    return projects.map(project => 
      <List.Item key={project.id} onClick={()=>
        {dispatch(projectActions.showProject(project.id))
        dispatch(projectActions.getCollabs(project.id))}}>
        <List.Content>
          <List.Header> {project.title ? project.title : "Untitled Project"} </List.Header>
          <List.Description>{project.description}</List.Description>
        </List.Content>
      </List.Item>)
  }

  const renderProjectDetail = () => {
    return <ProjectDetail project={project} />
  }

  
    return (
      <div>
        <h1>{!project.id ? "Projects" : null}</h1>
        {!project.id ? 
        <List celled>
         { renderProjects() }
        </List> :
         renderProjectDetail()}
      </div>
    );
  
}

export default ProjectsContainer;
