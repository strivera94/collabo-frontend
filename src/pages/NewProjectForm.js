import React, { Component } from 'react';

export class NewProjectForm extends Component {
    state = {
        title: "",
        description: "",
        discipline: "",
        medium: "",
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = () => {
        fetch("")
    }
    
    render() {
        console.log(this.state.title, this.state.description)
        return (
            <form onSubmit>
                <h1>New Project Form</h1>
              <label>
                Discipline being sought:
                <select name="discipline" onChange={this.handleChange} value={this.state.discipline} >
                  <option value="Music">Music</option>
                  <option value="Video">Video</option>
                  <option value="Fine Art">Fine Art</option>
                </select>
              </label>
              <label>
                Medium being sought:
                <select name="medium" onChange={this.handleChange} value={this.state.medium} >
                  <option value="Digital">Digital</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Film">Film</option>
                  <option value="Animation">Animation</option>
                  <option value="Painting">Painting</option>
                  <option value="Sculpting">Sculpting</option>
                </select>
              </label>
              <br/>
              <label>
                Title
                <input name="title" type="text" placeholder="Bold & Brash" onChange={this.handleChange} value={this.state.title} />
              </label>
              <label>
                Description
                <input name="description" type="text" placeholder="Help me do an art" onChange={this.handleChange} value={this.state.description} />
              </label>
              <button type="submit">Submit</button>
            </form>
        );
    }
}

export default NewProjectForm;
