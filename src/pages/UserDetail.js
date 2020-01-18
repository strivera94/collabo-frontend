import React from 'react';

const UserDetail = (props) => {

    return (
        <div>
            <h1>Name/Alias:{props.user.alias ? props.user.alias : props.user.name }</h1>
            <h3>About:</h3>
            <p>{props.user.about}</p>
            <div>
                <h3>Reviews:</h3>
            </div>
        </div>
    );
}

export default UserDetail;
