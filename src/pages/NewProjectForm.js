import React, {useState} from 'react';
import { Form, Button, Grid, Segment } from 'semantic-ui-react' 
import { useDispatch, useSelector } from 'react-redux'
import projectActions from '../redux/actions/projectActions'

// Should redirect to ProjectDetail

const NewProjectForm = ({history}) => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.currentUser.id)

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
  }
    
  const {title, description} = projectForm
  return (
    <Grid textAlign='center' style={{ height: '50vh' }} padded verticalAlign='middle' >
      <Grid.Column  textAlign='left' style={{ maxWidth: 800 }}>
        <Form onSubmit={handleSubmit}>
          <Segment>
            <h1>New Project Form</h1>
            <Form.Field>
              <label>
                Title
                <input name="title" type="text" placeholder="Project Title" onChange={handleChange} value={title} />
              </label>
            </Form.Field>
            <Form.Field>
              <label>
                Description
                <input name="description" type="text" placeholder="What are you looking to do?" onChange={handleChange} value={description} />
              </label>
            </Form.Field>
            <Button type="submit" color='teal' >Submit</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default NewProjectForm;
