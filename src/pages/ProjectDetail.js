import React from 'react';
import { Card, List, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import projectActions from '../redux/actions/projectActions'

const ProjectDetail = (props) => {

    const dispatch = useDispatch()
    const project = useSelector(state => state.projects.project)
    const user = useSelector(state => state.currentUser.id)
    const collaborators = useSelector(state => state.projects.collaborations)
    const host = useSelector(state => state.projects.project.user.name)

    const joinProject = (event) => {
        event.preventDefault()
        dispatch(projectActions.joinProject(user, project.id))
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
    
    const checkIfJoined = () => {
        const collaboratorIds = collaborators.map(collaborator => 
        collaborator.user.id)
        if (!collaboratorIds.includes(user)){
           return <Button onClick={joinProject}>Join Project</Button> 
        } else{
            return <p>You've already joined this project</p>
        }
    }

    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>{project.title ? project.title : "Untitled Project"}</Card.Header>
            <Card.Description>Hosted by: {host} </Card.Description>
            <Card.Description><strong>Description:</strong> {project.description}</Card.Description>
            {checkIfJoined()}
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