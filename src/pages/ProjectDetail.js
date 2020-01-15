import React from 'react';
import { useSelector } from 'react-redux';

const ProjectDetail = (props) => {

    const project = useSelector(state => state.projects.project)

    return (
        <div>
            <h1>{project.title ? project.title : "Untitled Project"}</h1>
            <p><strong>Description:</strong> {project.description}</p>
            <h3>Hosted by: </h3>
            <h3>Collaborating with:</h3>
        </div>
    );
}

export default ProjectDetail;
