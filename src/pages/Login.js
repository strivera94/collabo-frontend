import React,{useState} from 'react';
import { Form, Button } from 'semantic-ui-react'
import {useDispatch} from 'react-redux';
import authActions from '../redux/actions/authActions';

const Login = (props) => {
  const dispatch = useDispatch();
  
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => 
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authActions.loginUserToDB(loginForm));
    props.history.push('/');
  };


  // Destructuring keys from our local state to use in the form
  const { email, password } = loginForm;

  // Component code
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
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
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Login;
