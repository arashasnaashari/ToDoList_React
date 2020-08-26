import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../context';

export default class Contact extends Component {
    state={
        showContectInfo:false
    };

    onDeleteClick=(id,dispath)=>{
        dispath({type:'DELETE_CONTACT',payload:id})
    }
    render() {
        const { name,email,phone ,id} = this.props.contact;
        const { showContectInfo } = this.state;
        
        return (

            <Consumer>
                {
                    value => {
                        const {dispath} = value;
                        return (
                            <div className="card card-body mb-3">
                <h4>{name}{' '}

                
                    <i onClick={()=>this.setState({
                        showContectInfo:!this.state.showContectInfo
                    })}  className="fas fa-sort-down" style={{cursor:"pointer"}}></i>


                    <i className="fas fa-times" style={{cursor:"pointer",float:"right"}} onClick={this.onDeleteClick.bind(this,id,dispath)}></i>


                </h4>
                
                {
                    showContectInfo?<ul className="list-group">
                    <li className="list-group-item">Email : {email}</li>
                    <li className="list-group-item">Phone : {phone}</li>
                </ul>:null
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