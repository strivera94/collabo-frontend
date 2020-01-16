import React from 'react';
import { useDispatch } from 'react-redux';
import projectActions from '../redux/actions/projectActions'

const ProjectCard = (props) => {
    
    const dispatch = useDispatch()

    const renderProjectDetail = () => {
        dispatch(projectActions.showProject(props.project.id))
        dispatch(projectActions.getCollabs(props.project.id))
    }

    return (
        <div onClick={renderProjectDetail}>
            <h3>{props.project.title ? props.project.title : "Untitled Project"}</h3>
            <p>{props.project.description}</p>
        </div>
    );
}

export default ProjectCard;
