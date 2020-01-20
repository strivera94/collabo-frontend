import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react' 
import { Redirect, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import projectActions from '../redux/actions/projectActions'

// Should redirect to ProjectDetail

const NewProjectForm = () => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.currentUser.id)

    const [projectForm, setProjectForm] = useState({
     title: "",
     description: "",
  });

  const handleChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  }
  const project = useSelector(state => state.projects.projects)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(projectActions.createProject(projectForm, id))
    //redirect to ProjectDetail
    // <Redirect to='/projects' />
    dispatch(projectActions.showProject(project[project.length - 1].id))
    dispatch(projectActions.getCollabs(project[project.length -1].id))
  }
    
  // console.log(this.state.title, this.state.description)
  const {title, description} = projectForm
  return (
            <Form onSubmit={handleSubmit}>
                <h1>New Project Form</h1>
              {/* <label>
                Discipline being sought:
                <select name="discipline" onChange={handleChange} value={this.state.discipline} >
                  <option value="Music">Music</option>
                  <option value="Video">Video</option>
                  <option value="Fine Art">Fine Art</option>
                </select>
              </label>
              <label>
                Medium being sought:
                <select name="medium" onChange={handleChange} value={this.state.medium} >
                  <option value="Digital">Digital</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Film">Film</option>
                  <option value="Animation">Animation</option>
                  <option value="Painting">Painting</option>
                  <option value="Sculpting">Sculpting</option>
                </select>
              </label> */}
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
