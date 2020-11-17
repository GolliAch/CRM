import React, { Component } from 'react';
import authService from './services/auth.service';
import { Redirect } from "react-router-dom";
class logout extends Component {
    state = {  }


    render() { 
        authService.logout(authService.getCurrentUser());
        return ( <Redirect to="/"/>);
    }
}
 
export default logout;