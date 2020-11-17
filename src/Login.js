import React, { Component } from "react";
import  {Button as UIButton, Paper  } from '@material-ui/core';
import { Form, Container, FormGroup } from 'reactstrap';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import AuthService from "./services/auth.service";

class login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loading: false,
      isError: false,
      message: ""
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }
  
  handleChange(event){
    const target= event.target;
    const value= target.value;
    const name = target.name;
    let item={...this.state.item};
    item[name] = value;
    this.setState({item});

  }
  
   handleLogin(e) {
    e.preventDefault();
    e.target.reset();
    this.setState({
      message: "",
      loading: true
    });
    //   // Include validation form to do this (aka validate correct email form for exanple)
    //this.form.validateAll();


      AuthService.login(this.state.item.username, this.state.item.password).then(
        () => {
          this.props.history.push("/");
          window.location.reload();
        },
        error => {
          console.log("ERROR ")
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            isError: true, 
            loading: false,
            message: resMessage
          });
        }
        );
        
   
    
    }
 
  errorMessage(){
    var isError=this.state.isError;
    if (isError)
      return (
        
        <Box color="white" bgcolor="palevioletred" p={1} >  
          "BAD LOGIN INFORMATIONS"
      </Box>
      )

  }
  


  render() {
    const paperStyle=
    {
       padding: '25px',
        margin: 'auto',
        maxWidth: 1200,
        backgroundColor:'#f1f1f1',
        position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }
    const bgImgCenter =   {
      backgroundImage: `url("https://www.sdstate.edu/sites/default/files/images/Mon-20/SDSU_ZoomBkgnd_A3.jpg")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height:'100vh',
    
}
    return (
      
    <div style={bgImgCenter} >
        <Paper style={paperStyle}>
        <Container    >
          <br></br>
        <Form onSubmit={this.handleLogin}>
            <FormGroup>
               <div><InputLabel htmlFor="username">Username</InputLabel></div> 
               <div> <input type="text" name="username" id="username" onChange={this.handleChange}></input> </div> 
            </FormGroup>
            <FormGroup>
               
                <div>
                <InputLabel htmlFor="password">Password</InputLabel>
                </div>
                <div>
                <input type="password" name="password" id="password" onChange={this.handleChange}></input>  
                </div>
               
            </FormGroup>
          
            <FormGroup>
               <UIButton color="primary" variant="outlined" type="submit"> Sign In </UIButton>{' '}
              
            </FormGroup>
            <FormGroup>
              {this.errorMessage()}
            </FormGroup>
        </Form>
        <br></br>
        </Container>
        </Paper>
  </div>

    );
  }
}
export default login;