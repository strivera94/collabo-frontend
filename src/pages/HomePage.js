import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const HomePage = () => {
  const name = useSelector(state => state.currentUser.name);
  const email = useSelector(state => state.currentUser.email);
  const about = useSelector(state => state.currentUser.about);
  const alias = useSelector(state => state.currentUser.alias);
  
  const welcome = alias ? <h1>Welcome back {alias}</h1> 
    : name ? (<h1>Welcome back {name}</h1>) : (<h1>Welcome back {email}</h1>);

  return (
    email 
    ? 
    <div>
      <Link to='/users/edit' >Edit Profile</Link>
      <h3> {welcome} </h3>
      <p> {about ? about : "Tell us about yourself" } </p>
      <div>
        <h3>Reviews</h3>
      </div>
    </div>
    :
    <div>
      <h1>Welcome to Collabo</h1>
    </div>
  );
}

export default HomePage;
