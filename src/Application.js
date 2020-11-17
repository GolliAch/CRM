import React, { Component } from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Clients from './Clients';
import Home from './Home';
class Application extends Component {
    state = {  }
    render() { 
        return ( 
              
      <Router>
          <Switch>
            <Route path='/' exact={true} Component={Home}/>
            <Route path='/clients' exact={true} Component={Clients}/>

          </Switch>
      </Router> 
         );
    }
}
 
export default Application;