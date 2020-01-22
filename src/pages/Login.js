import React,{useState} from 'react';
import { Form, Button, Grid, Segment, Header } from 'semantic-ui-react'
import {useDispatch} from 'react-redux';
import authActions from '../redux/actions/authActions';
import { Link } from 'react-router-dom';

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
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 450 }} >
        <Form onSubmit={handleSubmit}>
          <Segment>
            <Header as='h1' color="teal" >Login Page</Header>
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
            <Button type="submit" color="teal" >Submit</Button>
          </Segment>
            <Header as={Link} to='/signup' color='blue' content='or sign-up now' ></Header>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
