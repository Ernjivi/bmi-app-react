import React, { Component } from 'react';


class UserForm extends Component{

    state = {
        firstName: '',
        lastName: '',
        birthDate: ''
    }

    onChangeHandler = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({firstName: '', lastName: '', birthDate: ''})
    }

    render(){
        return (
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                onChange={this.onChangeHandler}
                value={this.state.firstName}/>
          </div>
          <div>
            <input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                onChange={this.onChangeHandler}
                value={this.state.lastName}/>
          </div>
          <div>
            <input type="date" name="birthDate"
                onChange={this.onChangeHandler}
                value={this.state.birthDate}/>
          </div>
          <div>
            <button>Añadir Usuario</button>
          </div>
        </form>
        )
    }
}

export default UserForm;
