import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import AddContact from './components/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context'

class App extends Component {
  render() {
    return (
      <Provider>
      <Header brand="Contact Manager"/>
      <AddContact/>
      <div className="container">
        <Contacts />
      </div>
      </Provider>

    )
  }
}


export default App;
