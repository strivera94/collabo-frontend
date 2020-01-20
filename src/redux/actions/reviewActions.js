const REVIEWS_URL =  'http://localhost:3000/reviews'
const USER_REVIEWS_URL = id => 'http://localhost:3000/users/' + id + '/reviews'



const getReviewsAction = reviewsArr => ({
    type: 'GET_REVIEWS',
    payload: reviewsArr
})

const postReviewAction = reviewObj => ({
    type: 'POST_REVIEW',
    payload: reviewObj
}) 



const getReviews = userId => dispatch => {
fetch(USER_REVIEWS_URL(userId))
.then(r => r.json())
.then( reviews => {
    dispatch(getReviewsAction(reviews))
})
}

const postReview = (userId, revieweeId, reviewForm) => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating: reviewForm.rating,
            content: reviewForm.content,
            reviewer_id: userId,
            reviewee_id: revieweeId
        })
    }
    fetch(REVIEWS_URL, config)
    .then(r => r.json())
    .then(reviewObj => {
        dispatch(postReviewAction(reviewObj))
        console.log("from Action",reviewObj)
    })
}

export default{
    getReviews,
    postReview
}
