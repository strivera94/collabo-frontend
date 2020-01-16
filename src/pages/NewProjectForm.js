import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import projectActions from '../redux/actions/projectActions'

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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(projectForm)
    dispatch(projectActions.createProject(projectForm, id))
  }
    
  // console.log(this.state.title, this.state.description)
  const {title, description} = projectForm
  return (
            <form onSubmit={handleSubmit}>
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
              <br/>
              <label>
                Title
                <input name="title" type="text" placeholder="Bold & Brash" onChange={handleChange} value={title} />
              </label>
              <label>
                Description
                <input name="description" type="text" placeholder="Help me do an art" onChange={handleChange} value={description} />
              </label>
              <button type="submit">Submit</button>
            </form>
  );
}

export default NewProjectForm;
