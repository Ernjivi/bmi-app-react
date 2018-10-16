import React from 'react';
import UserItem from './UserItem';

import styles from './UserList.module.scss';


const UserList = (props) => {
    console.log(styles);
    return (
        <ul className={styles['user-list']}>
            {props.userList.map(
                user => <UserItem key={user.id} firstName={user.firstName} lastName={user.lastName} userId={user.id} />)}
        </ul>
    )
}

export default UserList;

