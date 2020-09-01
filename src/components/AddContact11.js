import React, { Component } from 'react'

export default class AddContact extends Component {
    constructor(props) {
        super(props);
        this.nameInput=React.createRef()
        this.phoneInput=React.createRef()
        this.emailInput=React.createRef()
    }
    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value,
        }
        console.log(contact);
    }
    static defaultProps = {
        name:'arash',
        email:'arash@gmail.com',
        phone:'09198003528'
    }
    render() {
        const {name,phone,email} = this.props;
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
                            defaultValue={name}
                            ref={this.nameInput}
                            />
                            <input 
                            type="email" 
                            className="form-control form-control-lg mb-1"
                            placeholder="Email"
                            name="email"
                            defaultValue={email}
                            ref={this.emailInput}
                            />
                            <input 
                            type="text" 
                            className="form-control form-control-lg mb-1"
                            placeholder="Phone"
                            name="phone"
                            defaultValue={phone}
                            ref={this.phoneInput}
                            />
                            <input type="submit" value="Add" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}
