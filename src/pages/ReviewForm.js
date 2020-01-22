import React, {useState} from 'react';
import { Form, Rating, Button } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import reviewActions from '../redux/actions/reviewActions'

const ReviewForm = ({history}) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.currentUser.id)
    const reviewee = useSelector(state => state.users.user.id)

    const [reviewForm, setReviewForm] = useState({
        content:"",
        rating: 1,
    })

    const handleChange = (e) => {
        setReviewForm({...reviewForm, [e.target.name]: e.target.value})
    }

    const handleRating = (e, {rating}) => {
        setReviewForm({...reviewForm, rating: rating })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(reviewActions.postReview(userId, reviewee, reviewForm))
        history.push('/users')
    }

    const {content, rating} = reviewForm
    console.log(content, rating)
    return (
        <Form >
          <Form.Field>
            <input placeholder="How was your experience working with this artist?"
             value={content} onChange={handleChange} name="content" />
          </Form.Field>
          <Form.Field>
            <Rating icon="star" maxRating={5} onRate={handleRating} rating={rating} name="rating" />  
          </Form.Field>
          <Button onClick={handleSubmit} type='submit' >Submit</Button>
        </Form>
    );
}

export default ReviewForm;
