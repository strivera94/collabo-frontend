import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import projectActions from '../redux/actions/projectActions'

const ProjectDetail = (props) => {
    const dispatch = useDispatch()
    const project = useSelector(state => state.projects.project)
    const user = useSelector(state => state.currentUser.id)

    const joinProject = (event) => {
        event.preventDefault()
        console.log(user, project.id)
        dispatch(projectActions.joinProject(user, project.id))
    }



    return (
        <div>
            <h1>{project.title ? project.title : "Untitled Project"}</h1>
            <h3>Hosted by: </h3>
            <p><strong>Description:</strong> {project.description}</p>
            <button onClick={joinProject}>Join Project</button>
            <h3>Collaborating with:</h3>
        </div>
    );
}

export default ProjectDetail;