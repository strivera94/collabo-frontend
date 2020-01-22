import React from 'react';
import { Button, List, Rating, Container, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import reviewActions from '../redux/actions/reviewActions'



const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser)
  const name = useSelector(state => state.currentUser.name);
  const email = useSelector(state => state.currentUser.email);
  const about = useSelector(state => state.currentUser.about);
  const alias = useSelector(state => state.currentUser.alias);
  const reviews = useSelector(state => state.reviews.reviews);
  
  const welcome = alias ? <h1>Welcome back, {alias}</h1> 
    : name ? (<h1>Welcome back, {name}</h1>) 
    : (<h1>Welcome back, {email}</h1>);

  const listReviews = () => {
    dispatch(reviewActions.getReviews(user.id))
    return reviews.map(review => 
      <List.Item key={review.id}>
        <List.Content>
          <List.Header>{review.content}</List.Header>
          <List.Description as={Rating} icon='star' maxRating={5} size='small'
          disabled rating={review.rating}/>
        </List.Content>
      </List.Item>
    )
  }
  

  return (
    email 
    ? 
    <div>
      <Button as={Link} to='/users/edit' >Edit Profile</Button>
      <h3> {welcome} </h3>
      <p> {about ? about : "Tell us about yourself" } </p>
      <div>
        <h3>Reviews</h3>
        {listReviews()}
        <h3>My Portfolio</h3>
      </div>
    </div>
    :
    <div>
    <Container text>
      <Header
        as='h1'
        content='Welcome to Collabo'
        style={{
          fontSize:'4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop:  '3em',
        }} />
      <Header
        as='h2'
        content='Info about the site'
        style={{
          fontSize:  '1.7em',
          fontWeight: 'normal',
          marginTop: '1.5em',
        }}
    />
  </Container>
    </div>
  );
}

export default HomePage;
