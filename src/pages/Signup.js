import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react'
import {useDispatch} from 'react-redux';
import userActions from '../redux/actions/authActions'

const Signup = (props) => {
  // initializing dispatch
    const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: ''
  });

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUserToDB(signupForm));
    history.push('/');
  };

  // Destructuring keys from our local state to use in the form
  const { email, password, name } = signupForm;

  // Component code
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
      <Form.Field>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      </Form.Field>
      <Form.Field>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
      </Form.Field>
      <Form.Field>
      <input 
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Signup;
