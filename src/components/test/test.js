import React, { Component } from 'react'

export default class Test extends Component {
    state={
        title:'',
        body:''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => this.setState({
            title:data.title,
            body:data.body
        }))
    }

    componentWillMount() {
        console.log('C_will_Mount');
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
