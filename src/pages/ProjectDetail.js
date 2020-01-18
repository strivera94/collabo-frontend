import React from 'react';
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
           <p>{collaborator.user.name}</p>
        )
    }
    
    const checkIfJoined = () => {
        const collaboratorIds = collaborators.map(collaborator => 
        collaborator.user.id)
        console.log(collaboratorIds, user)
        if (!collaboratorIds.includes(user)){
           return <button onClick={joinProject}>Join Project</button> 
        } else{
            return <p>You've already joined this project</p>
        }
    }

    return (
        <div>
            <h1>{project.title ? project.title : "Untitled Project"}</h1>
            <h3>Hosted by: {host} </h3>
            <p><strong>Description:</strong> {project.description}</p>
            {checkIfJoined()}
            <h3>Collaborating with:</h3>
              <ul>
                {listCollaborators()}
              </ul>
        </div>
    );
}

export default ProjectDetail;