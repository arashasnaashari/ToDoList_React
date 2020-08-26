import React,{Component} from 'react';
import { act } from 'react-dom/test-utils';

const Context = React.createContext();
const reducer = (state,action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.filter(contact => contact.id != action.payload)
            }
            default:
                return state;
    }
}

export class Provider extends Component {
    state = {
        contacts : [
            {
                id:1,
                name:'Arash',
                email:'arash@gmail.com',
                phone:'09198003528'
            },
            {
                id:2,
                name:'Hamid',
                email:'hamid@gmail.com',
                phone:'09125101781'
            },
            {
                id:3,
                name:'Mary',
                email:'mary@gmail.com',
                phone:'09124392798'
            }
        ],
        dispath:action => this.setState(state => reducer(state,action))
        
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;