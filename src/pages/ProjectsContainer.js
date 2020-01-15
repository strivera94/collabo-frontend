import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import projectActions from '../redux/actions/projectActions'
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail'

const ProjectsContainer = (props) => {
  
  const projects = useSelector(state => state.projects.projects)
  const project = useSelector(state => state.projects.project)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(projectActions.getProjects());
  })

  const renderProjects = () => {
    return projects.map(project => 
      <ProjectCard key={project.id} project={project} />)
  }

  const renderProjectDetail = () => {
    return <ProjectDetail project={project} />
  }

  
    return (
      <div>
        <h1>{!project.id ? "Projects" : null}</h1>
        {!project.id ? renderProjects() : renderProjectDetail()}
      </div>
    );
  
}

export default ProjectsContainer;
