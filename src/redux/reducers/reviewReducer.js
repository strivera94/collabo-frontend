const initialState = {
    reviews:[],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_REVIEWS':
        return { ...state, reviews: payload }

    case 'POST_REVIEW':
        return { ...state, reviews:[...state.reviews, payload]}

    default:
        return state
    }
}
