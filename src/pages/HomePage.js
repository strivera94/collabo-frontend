import React, { useState } from 'react';
import { Button, List, Rating, Container, Header, Confirm, Icon, Card, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import reviewActions from '../redux/actions/reviewActions'
import authActions from '../redux/actions/authActions'



const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser)
  const name = useSelector(state => state.currentUser.name);
  const email = useSelector(state => state.currentUser.email);
  const about = useSelector(state => state.currentUser.about);
  const alias = useSelector(state => state.currentUser.alias);
  const reviews = useSelector(state => state.reviews.reviews);
  const [openConfirm, setOpenConfirm] = useState({
    openConfirm: false
  })

  
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
  
  const openConfirmPrompt = () => setOpenConfirm({ ...openConfirm, openConfirm: true })
  const closeConfirmPrompt = () => setOpenConfirm({ ...openConfirm, openConfirm: false })

  const deleteAccount = () => {
    dispatch(authActions.deleteUserFromDB(user.id))
  }

  return (
    email 
    ? 
    <div>
      <Grid columns='equal' >
        <Grid.Row columns={1} textAlign='right' >
          <Grid.Column width='16' floated='right' >  
            <Button as={Link} to='/users/edit' color='teal' >Edit Profile<Icon fitted name='edit outline' /></Button><Button onClick={openConfirmPrompt} color="red">Delete Account<Icon fitted name='delete' /></Button>
            <Confirm 
              header='Are you sure you want to delete your account?'
              content='All of your related info will be deleted as well'
              confirmButton='Delete'
              open={openConfirm.openConfirm} 
              onCancel={closeConfirmPrompt} 
              onConfirm={deleteAccount} />
          </Grid.Column>  
        </Grid.Row>
        <Grid.Row columns={1} >
          <Grid.Column width='16' floated='left' >  
            
              <h3> {welcome} </h3>
              <p> {about ? about : "Tell us about yourself" } </p>
            
          </Grid.Column>  
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row columns={2} width='16' >
          <Grid.Column width='7'floated='left' >
            <Card>
              <h3>Reviews</h3>
              {listReviews()}
            </Card>
          </Grid.Column>
          {/* <Grid.Column>
            <Card>
              <h3>My Portfolio</h3>
            </Card>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>     
    </div>
    :
    <div>
    <Container text textAlign='center' style={{
       height: '100vh', 
       }} verticalAlign='middle' >
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
        as={Link}
        to='/signup'
        content='Start collaborating with artists today'
        color='blue'
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
