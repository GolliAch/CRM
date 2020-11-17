import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavLink,NavbarBrand, NavbarText} from 'reactstrap';
import authService from './services/auth.service';
import jwt_decode from 'jwt-decode';
import { Redirect } from "react-router-dom";


class NavApp extends Component {
    state = { 
      redirect: ''
     }

 

    async componentDidMount(){
      const currentUser = authService.getCurrentUser();
      if (!currentUser) 
      {
          this.setState({ redirect: "/login" });

      }  else  { 
        const token = jwt_decode(currentUser.accessToken)
        const expTime = ((token.exp*1000)  - 6000)
       
        const d=  Date.now();
        if (d>=expTime)
        this.setState({ redirect: "/login" })
        
      }
    }

    loginLogout(){
      if (authService.getCurrentUser()) {
        const  name=   authService.getCurrentUser().username;
        return ( <Nav className='rightNav ml-auto' navbar>
        <NavbarText> {name}  </NavbarText>
       
       
        <NavLink href="/logout"> 
           <img
            src="https://www.flaticon.com/svg/static/icons/svg/1716/1716282.svg"
            width="20"
            height="20"
            className="mr-auto"
            alt="Logout"
          />
        </NavLink>
    
        </Nav>
     )
      }
   
      else return   (
        <Nav className='rightNav ml-auto' navbar>

        <NavLink href="/logout"> Login </NavLink>
        </Nav>

      )

    }


    render() { 
      if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (
           
              <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">CRM 
                Golli</NavbarBrand>
               
              
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/clients/">Clients</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/home">Home</NavLink>
                    </NavItem>
                   
                  </Nav>
                 {this.loginLogout()}
                 
              
              </Navbar>
          
          );
    }
}
 
export default NavApp;  