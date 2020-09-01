import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'; // BrowserRouter for localhost
import Contacts from './components/Contacts';
import Header from './components/Header';
import About from './components/pages/about';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import NotFound from './components/pages/NotFound'

class App extends Component {
  render() {
    return (
      <Provider>
        
       <Router> {/*  basename={process.env.PUBLIC_URL} */}
          <Header brand="Contact Manager"/>
          <div className="container">
            <Switch>
              <Route path="/" component={Contacts} exact/>
              <Route path="/contact/edit/:id" component={EditContact} exact/>
              <Route path="/about/:id" component={About} exact/>
              <Route path="/contact/add" component={AddContact} exact/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router> 
      </Provider>


    )
  }
}


export default App;
