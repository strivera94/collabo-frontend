import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react' 
import { Redirect, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import projectActions from '../redux/actions/projectActions'

// Should redirect to ProjectDetail

const NewProjectForm = ({history}) => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.currentUser.id)
    const projects = useSelector(state => state.projects.projects)

    const [projectForm, setProjectForm] = useState({
     title: "",
     description: "",
  });

  const handleChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(projectActions.createProject(projectForm, id))
    history.push('/projects')
    //newProject not in array at this point
    // dispatch(projectActions.showProject(projects[projects.length - 1].id))
    // dispatch(projectActions.getCollabs(projects[projects.length - 1].id))
  }
    
  const {title, description} = projectForm
  return (
            <Form onSubmit={handleSubmit}>
                <h1>New Project Form</h1>
              <Form.Field>
              <label>
                Title
                <input name="title" type="text" placeholder="Bold & Brash" onChange={handleChange} value={title} />
              </label>
              </Form.Field>
              <Form.Field>
              <label>
                Description
                <input name="description" type="text" placeholder="Help me do an art" onChange={handleChange} value={description} />
              </label>
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
  );
}

export default NewProjectForm;
