import React, {useState} from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/authActions'

const EditProfileForm =({history}) => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.currentUser.id)
    const initName = useSelector(state => state.currentUser.name)
    const initAlias = useSelector(state => state.currentUser.alias)
    const initAbout = useSelector(state => state.currentUser.about)

    const [editForm, setEditForm] = useState({
        name: initName,
        alias: initAlias,
        about: initAbout,
    });


    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authActions.editProfile(editForm, id))      
        history.push('/')
        
      }

    const {name, alias, about} = editForm
    return (
        <div>
            <h1>Edit Profile</h1>
            <Grid>
              <Grid.Column>
                <Form>
                    <Form.Field>
                    <label>
                        Name: 
                        <input name="name" type="text" onChange={handleChange} value={name} />
                    </label>
                    </Form.Field>
                    <Form.Field>
                    <label>
                        Alias: 
                        <input name="alias" type="text" onChange={handleChange} value={alias} />
                    </label>
                    </Form.Field>
                    <Form.Field>
                    <label>
                        About: 
                        <input name="about" type="text" onChange={handleChange} value={about} />
                    </label>
                    </Form.Field>
                    <Button onClick={handleSubmit} type='submit' color='teal' >Submit</Button>
                </Form>
              </Grid.Column>
            </Grid>
        </div>
    )
}
export default EditProfileForm