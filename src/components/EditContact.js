// Controlled Components
import React, { Component } from 'react';
import {Consumer} from '../context';
// import uuid from 'uuid/dist/v4.js'; becuse JsonWebToken put id by defult
import TextInputGroup from './textInputGroup'
import axios from 'axios'

class EditContact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        error:{}
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        });

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
        };
        const upContect = {
            name,
            email,
            phone
        }
        const {id} = this.props.match.params;
        const res =await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContect
        );
        dispatch({type:'UPDATE_CONTACT',payload:res.data})
        this.setState({
            name:'',
            email:'',
            phone:'',
            error:{}
        });
        this.props.history.push('/')

    }

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
                            <div className="card-header">Edit Contact</div>
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
                                       
                                <input type="submit" value="Update" className="btn btn-light btn-block"/>
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

export default EditContact;
