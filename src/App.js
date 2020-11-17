import React, { Component } from 'react';
import {Route, BrowserRouter ,Switch} from 'react-router-dom';
import Clients from './Clients/Clients';
import dashboard from './Dashboard';
import Home from './Home/Home';
import persoLogin from './Login';

import Register from "./components/register.component";
//import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import logout from './logout';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            
      <BrowserRouter>
          <Switch>
    
            <Route component={Home}  exact path="/home" />
            <Route component={Home}  exact path="/" />
            <Route  component={Clients} exact path="/clients"/>
            <Route  component={persoLogin} exact path="/login"/>
            <Route  component={dashboard} exact path="/dashboard"/>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={persoLogin} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/logout" component={logout}/>

          </Switch>
      </BrowserRouter> 
         );
    }
}
 
export default App;