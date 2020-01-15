import React from 'react';

const UserDetail = (props) => {

    const editProfile = () => {
        
    }

    return (
        <div>
            <h1>Name/Alias:{props.user.alias ? props.user.alias : props.user.name }</h1>
            <h3>About:</h3>
        </div>
    );
}

export default UserDetail;
