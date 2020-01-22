import React, { useEffect } from 'react';
import {List, Image} from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux';
import userActions from '../redux/actions/userActions'
import reviewActions from '../redux/actions/reviewActions'
import UserDetail from './UserDetail';

const UserContainer = () => {

    const users = useSelector(state => state.users.users)
    const user = useSelector(state => state.users.user)

    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(userActions.getUsers());
    })
    
    const renderInfo = () => {
      // use Semantic-UI-React to render this list
      return users.map(user =>
          <List.Item key={user.id} onClick={()=>{dispatch(userActions.showUser(user.id))
          dispatch(reviewActions.getReviews(user.id))}}>
            <Image avatar src='https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg' />
            <List.Content>
              <List.Header > {user.name}</List.Header>
            </List.Content>
            </List.Item>
            )
    }

    // const renderInfo = () => {
    //   // use Semantic-UI-React to render this list
    //     return users.map(user =>
    //       <UserCard key={user.id} user={user} />)
    // }

    const renderUserDetail = () => {
        return <UserDetail user={user} />
    }

    return (
            <div>
              <h1>{ !user.id ? "Users" : null }</h1>
              { !user.id ?
               <List celled size={"big"}>
                 {renderInfo()} 
               </List>:
                renderUserDetail() }
            </div>
        );
}

export default UserContainer;
