import React from 'react';
import { Card, Button, List, Rating } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'

const UserDetail = (props) => {
  const currentUser = useSelector(state => state.currentUser.id)
  const reviews = useSelector(state => state.reviews.reviews)

  const checkIfUser = () => {
    if (currentUser !== props.user.id){
      return <Button as={Link} to='/users/review' >Leave Review</Button>
    } 

  }


  
  const listReviews = () => {
    return reviews.map(review => 
      <List.Item key={review.id}>
      <List.Content>
        <List.Header as={Rating} icon='star' maxRating={5} size='small'
         disabled rating={review.rating} />
        <List.Description>{review.content}</List.Description>
      </List.Content>
   </List.Item>
    )
  }

  return (
        <div>
        <Card>
          <Card.Content>
            <Card.Header>{props.user.alias ? props.user.alias : props.user.name }</Card.Header>
            <Card.Description>{props.user.about}</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            {checkIfUser()}
            <Card.Header>Reviews:</Card.Header>
            {listReviews()}
          </Card.Content>
        </Card>
        </div>
    );
}

export default UserDetail;
