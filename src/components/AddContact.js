// Controlled Components
import React, { Component } from 'react';
import {Consumer} from '../context';
// import uuid from 'uuid/dist/v4.js'; becuse JsonWebToken put id by defult
import TextInputGroup from './textInputGroup'
import axios from 'axios'

class AddContact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        error:{}
    };
    onSubmit = async (dispatch,e) => {
        e.preventDefault();
        const {name,phone,email} = this.state;
        if(name === '') {
            this.setState({error : {name:'name is required'}});
            return;
        }
        if(email === '') {
            this.setState({error : {email:'email is required'}});
            return;
        }
        if(phone === '') {
            this.setState({error : {phone:'phone is required'}});
            return;
        }
        
        const newContact = {
        //    id:uuid(),
           name,
           email,
           phone
        };
        const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContact);
            dispatch({type:'ADD_CONTACT',payload:res.data})
            this.setState({
                name:'',
                email:'',
                phone:'',
                error:{}
            });

            this.props.history.push('/')
        };
        



    onChange = e => this.setState({[e.target.name]:e.target.value});
    render() {
        const {name,phone,email,error} = this.state;
        return (
            <Consumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>    
                                <TextInputGroup 
                                   name="name"
                                   placeholder="Name"
                                   type="text" 
                                   value={name}
                                   onChange={this.onChange}
                                   error={error.name}
                                />
                                <TextInputGroup 
                                   name="email"
                                   placeholder="Email"
                                   type="email" 
                                   value={email}
                                   onChange={this.onChange}
                                   error={error.email}
                                />
                                <TextInputGroup 
                                   name="phone"
                                   placeholder="Phone"
                                   type="text" 
                                   value={phone}
                                   onChange={this.onChange}
                                   error={error.phone}
                                />
                                       
                                <input type="submit" value="Add" className="btn btn-light btn-block"/>
                                </form>
                            </div>
                        </div>
                    )
                }
            }
        </Consumer>
        )
    }
}

export default AddContact;
