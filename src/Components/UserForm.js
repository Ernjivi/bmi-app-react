import React, { Component } from 'react';
import styles from './UserForm.module.scss';


class UserForm extends Component{

    state = {
        firstName: '',
        lastName: '',
        birthDate: '',
        isValid: false
    }

    onChangeHandler = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        if(this.state.firstName !== '' && this.state.lastName !== ''){
            this.setState({isValid: true})
        }
    }

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            birthDate: '',
            isValid: false
        })
    }

    render(){
        let buttonClasses = [styles['full-with']];
        if(this.state.isValid){
            buttonClasses.push(styles.active)
        }
        
        return (
        <form className={styles['user-form']} onSubmit={this.onSubmitHandler}>
          <div>
            <input
                className={styles['full-with']}
                type="text"
                name="firstName"
                placeholder="Nombre"
                onChange={this.onChangeHandler}
                value={this.state.firstName}/>
          </div>
          <div>
            <input
                className={styles['full-with']}
                type="text"
                name="lastName"
                placeholder="Apellidos"
                onChange={this.onChangeHandler}
                value={this.state.lastName}/>
          </div>
          <div>
            <input
                className={styles['full-with']}
                type="date" name="birthDate"
                onChange={this.onChangeHandler}
                value={this.state.birthDate}/>
          </div>
          <div>
            <button
                disabled={!this.state.isValid}
                className={buttonClasses.join(' ')}>
                Añadir Usuario
            </button>
          </div>
        </form>
        )
    }
}

export default UserForm;
