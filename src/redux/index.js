import {combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/authReducer'
import projects from './reducers/projectReducer'
import users from './reducers/userReducer'
import reviews from './reducers/reviewReducer'


const rootReducer = combineReducers({
  currentUser: currentUser,
  projects: projects,
  users: users,
  reviews: reviews
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));