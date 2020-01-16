import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions'
import UserCard from './UserCard.js'
import UserDetail from './UserDetail';

const UserContainer = () => {

    const users = useSelector(state => state.users.users)
    const user = useSelector(state => state.users.user)

    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(userActions.getUsers());
    })
    
    const renderUsers = () => {
        return users.map(user =>
          <UserCard key={user.id} user={user} />)
    }

    const renderUserDetail = () => {
        return <UserDetail user={user} />
    }

    return (
            <div>
              <h1>{ !user.id ? "Users" : null }</h1>
              { !user.id ? renderUsers() : renderUserDetail() }
            </div>
        );
}

export default UserContainer;
