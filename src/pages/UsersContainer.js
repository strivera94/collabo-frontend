import React, { useEffect } from 'react';
import {List, Image, Grid} from 'semantic-ui-react';
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
      return users.map(user =>
          <List.Item key={user.id} onClick={()=>{dispatch(userActions.showUser(user.id))
          dispatch(reviewActions.getReviews(user.id))}}>
            <Image avatar src='https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg' />
            <List.Content>
              {console.log(user.alias)}
              <List.Header > { !user.alias ? user.name : user.alias } </List.Header>
            </List.Content>
            </List.Item>
            )
    }

    const renderUserDetail = () => {
        return <UserDetail user={user} />
    }

    return (
            <div>
              { !user.id
               ?
               <Grid centered >
                <Grid.Row>
                  <Grid.Column width={14} >
               <h1>{ !user.id ? "Users" : null }</h1>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={14} >
                    <List celled size={"big"}>
                      {renderInfo()} 
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
               :
                renderUserDetail() }
            </div>
        );
}

export default UserContainer;
