import React, { Component } from 'react';
import styles from './UserRegister.module.scss';
import UserForm from './UserForm';
import UserList from './UserList';
import axios from 'axios';


class UserRegister extends Component{
    state = {
      userList: []
    }

    componentDidMount = () => {
        this.fetchUsers();
    }

    onFormSubmitHandler = (user) => {
        this.createUser(user);
    }

    fetchUsers = async () => {
        let userRequest = await axios.get('http://localhost:3001/users');
        let userList = userRequest.data;
        this.setState({userList})
    }

    createUser = async (user) => {
        let createdUser = await axios.post('http://localhost:3001/users', user);
        if (createdUser.status === 201){
            this.fetchUsers();
        }
    }

    render = () => {
        return (
            <>
                <h1 className={styles.title}>IMC Calculator</h1>
                <UserForm onSubmit={this.onFormSubmitHandler} />
                <UserList userList={this.state.userList} />
            </>
        )
    }
}

export default UserRegister;