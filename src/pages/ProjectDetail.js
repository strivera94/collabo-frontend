import React from 'react';
import { Card, List, Button, Message } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import projectActions from '../redux/actions/projectActions'

const ProjectDetail = (props) => {

  const dispatch = useDispatch()
  const project = useSelector(state => state.projects.project)
  const user = useSelector(state => state.currentUser.id)
  const collaborators = useSelector(state => state.projects.collaborations)
  const host = useSelector(state => state.projects.project.user.id)
  const hostName = useSelector(state => state.projects.project.user.name)

  const joinProject = (event) => {
      event.preventDefault()
      if(!user){
        return alert("Must be logged in to join a project")
      }else{
        dispatch(projectActions.joinProject(user, project.id))
      }
  }

  const listCollaborators = () => {
    return collaborators.map(collaborator => 
      <List.Item>
        <List.Content>
          <List.Header>{collaborator.user.name}, {collaborator.user.email}</List.Header>
        </List.Content>
      </List.Item>
      )
  }
      
  const declareCompleted = (event) => {
    event.preventDefault()
    console.log("clicked")
    dispatch(projectActions.declareCompleted(project.id))
  }
  
  const handleProjectButton = () => {
      const collaboratorIds = collaborators.map(collaborator => 
      collaborator.user.id)
      if (project.completed){
        return <Button disabled size="tiny" color="green" >Project Complete!</Button>
      }else if( host === user){
          return <Button size="tiny" color="blue" onClick={declareCompleted} >Mark as Completed</Button>
      } else if (!collaboratorIds.includes(user)){
          return <Button onClick={joinProject} size="tiny" color="teal" >Join Project</Button>
      } else{
          return <p>You've already joined this project</p>
      }
  }

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{project.title ? project.title : "Untitled Project"}</Card.Header>
          <Card.Description>Hosted by: {hostName} </Card.Description>
          <Card.Description><strong>Description:</strong> {project.description}</Card.Description>
          {handleProjectButton()}
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Collaborating with:</Card.Header>
            <List celled size={'small'}>
              {listCollaborators()}
            </List>
        </Card.Content>
      </Card>
    </div>
  );
}

export default ProjectDetail;