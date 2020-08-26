import React, { Component } from 'react'

export default class AddContact extends Component {
    state={
        name:'',
        email:'',
        phone:''
    }
    onChange = e => this.setState({[e.target.name]:e.target.value});
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        const {name,phone,email} = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                            <input 
                            type="text" 
                            className="form-control form-control-lg mb-1"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={this.onChange}
                            />
                            <input 
                            type="email" 
                            className="form-control form-control-lg mb-1"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            />
                            <input 
                            type="text" 
                            className="form-control form-control-lg mb-1"
                            placeholder="Phone"
                            name="phone"
                            value={phone}
                            onChange={this.onChange}
                            />
                            <input type="submit" value="Add" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}
