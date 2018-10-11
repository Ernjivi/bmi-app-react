import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = (props) => {
    return (
        <li>
            <Link to={`/users/${props.userId}`}>
                {props.userId} {props.firstName} {props.lastName}
            </Link>
        </li>
    )
}

export default UserItem;