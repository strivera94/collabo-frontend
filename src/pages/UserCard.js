import React from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions'

const UserCard = (props) => {

    const dispatch = useDispatch()

    const setUserObj = () => dispatch(userActions.showUser(props.user.id))

    return (
        <div onClick={setUserObj}>
            <h3>{props.user.alias ? props.user.alias : props.user.name}</h3>
        </div>
    );
}

export default UserCard;
