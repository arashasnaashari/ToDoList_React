import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class Contact extends Component {
    state={
        showContectInfo:false
    };

    onDeleteClick= async (id,dispatch)=>{
        try {
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type:'DELETE_CONTACT',payload:id})
        } catch (error) {
            dispatch({type:'DELETE_CONTACT',payload:id})
        }
    }
    render() {
        const { name,email,phone ,id} = this.props.contact;
        const { showContectInfo } = this.state;
        
        return (

            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="card card-body mb-3">
                                <h4>{name}{' '}
                                    <i onClick={()=>this.setState({
                                        showContectInfo:!this.state.showContectInfo
                                    })}  className="fas fa-sort-down" style={{cursor:"pointer"}}></i>

                                    <i className="fas fa-times text-danger" style={{cursor:"pointer",float:"right"}} onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>
                                    <Link to={`contact/edit/${id}`}>
                                        <i className="fas fa-pencil-alt" style={{
                                            cursor:'pointer',
                                            float:'right',
                                            marginRight:'1rem'
                                            }}></i>
                                    </Link>
                                </h4>
                                {
                                    showContectInfo?
                                    <ul className="list-group">
                                        <li className="list-group-item">Email : {email}</li>
                                        <li className="list-group-item">Phone : {phone}</li>
                                    </ul>
                                    :null
                                }   
                            </div>
                        )
                    }
                }
            </Consumer>
            
        )
    }
}

Contact.propTypes = {
    contact:PropTypes.object.isRequired
}