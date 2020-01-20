import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/authActions'

const EditProfileForm =({history}) => {
    const dispatch = useDispatch()
    const id = useSelector(state => state.currentUser.id)
    const initName = useSelector(state => state.currentUser.name)
    const initAlias = useSelector(state => state.currentUser.alias)
    const initAbout = useSelector(state => state.currentUser.about)

    const [editForm, setEditForm] = useState({
        // email: '',
        // password: '',
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
        // link to HomePage  
        history.push('/')
        
      }

    const {name, alias, about} = editForm
    return (
        <div>
            <Form>
            <h1>Edit Profile</h1>
            {/* <label>
                 Email: 
                 <input name="email" type="text" onChange={this.handleChange} value={this.state.email} />
            </label>
             <label>
                 Password: 
                 <input name="password" type="password" onChange={this.handleChange} value={this.state.password} />
             </label> */}
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
            <Button onClick={handleSubmit} type='submit' >Submit</Button>
            </Form>
        </div>
    )
}
export default EditProfileForm