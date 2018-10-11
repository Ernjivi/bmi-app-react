import React from 'react';
import UserItem from './UserItem';


const UserList = (props) => {
    return (
        <ul>
            {props.userList.map(
                user => <UserItem key={user.id} firstName={user.firstName} lastName={user.lastName} userId={user.id} />)}
        </ul>
    )
}

export default UserList;

