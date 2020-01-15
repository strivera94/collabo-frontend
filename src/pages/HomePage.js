import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const name = useSelector(state => state.currentUser.name);
  const email = useSelector(state => state.currentUser.email)
  const about = useSelector(state => state.currentUser.about)
  const welcome = name ? (<h1>Welcomeback {name}</h1>)  :(<h1>Welcome back {email}</h1>);
  
  return (
    email 
    ? 
    <div>
      <button>Edit Profile</button>
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
