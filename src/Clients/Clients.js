import React, { Component } from 'react';
import NavApp from '../NavApp';
import {Button as UIButton, Grid,Paper} from '@material-ui/core/';
import InputLabel from '@material-ui/core/InputLabel';
import '../App.css'; 
import MenuItem from '@material-ui/core/MenuItem';
import Moment from 'react-moment';
import Select from '@material-ui/core/Select';
import { Table, Form, Container, FormGroup } from 'reactstrap';
import ClientInfo from './ClientInfo';
import RemoveButton from './RemoveButton';
import authHeader from '../services/auth-header';
import axios from 'axios';
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";



class Clients extends Component {

     emptyItem={
        name : '',
        email : '',
        phone : '',
        age : { 
            "id": '0'
        },
        property : { 
            "id": '0'
        },
        userdate : new Date()
        


     }
     constructor(props){
         super(props)
         this.state ={
            isLoading : true,
            openDelete : false,
            Clients : [],
            Ages : [],
            Properties: [],
            addClient : false,
            item : this.emptyItem
         }
         this.handleSubmit= this.handleSubmit.bind(this);
         this.handleChange= this.handleChange.bind(this);
         this.handleChangeDrop= this.handleChangeDrop.bind(this);
     }
     // to remove a client by id
  
    async handleSubmit(event){
     
        const item = this.state.item;
      
       await axios.post('/api/clients',item,{headers: authHeader()});
        
    
        event.preventDefault();
        this.props.history.push("/clients");

      }

  
  
      handleChange(event){
        const target= event.target;
        const value= target.value;
        const name = target.name;
        let item={...this.state.item};
        item[name] = value;
        this.setState({item});
 
      }
      handleChangeDrop(event){
        const target= event.target;
        const value= target.value;
       const name=target.name;

        let item={...this.state.item};
        console.log(name);
        if (name === "age")
        item.age.id= value;
        if (name ==="property") {
          
        item.property.id= value;
        }
        this.setState({item});
        console.log(item);
      }
  
     async componentDidMount()
     {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) 
        {
            this.setState({ redirect: "/login" });

        }  else { 
        this.setState({ currentUser: currentUser, userReady: true })



         const res = axios.get('/api/clients', { headers: authHeader() });
        this.setState({isLoading :  false, Clients :(await res).data});



        const res2 = axios.get('/api/ages', { headers: authHeader() });
        this.setState({isLoading :  false, Ages :(await res2).data});


        const res3 = axios.get('/api/properties', { headers: authHeader() });
        this.setState({isLoading :  false, Properties :(await res3).data});

        }
    }
     

    render() { 
        const { Clients, isLoading, addClient} = this.state;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
          if (isLoading)
          return (<div> <NavApp/> ... Loading </div>)
        

        let rows=  
            Clients.map(clients => 
                <tr key={clients.id }>
                    
                    <td> {clients.name}</td>
                    <td> {clients.phone}</td>
                    <td> {clients.email} </td>
                    <td> {clients.age.age} </td>
                    <td> {clients.property.type} </td>

                    <td> <Moment date={clients.userdate} format="YYYY/MM/DD"/></td>
                    <td>  <RemoveButton id={clients.id} /> </td>
                    <td> <ClientInfo id={clients.id}/></td>
                </tr>
                ) 
        
                const GridStyle=
                {
                // padding: '2px',
                //    margin: 'auto',
                //    maxWidth: 1450,
                   backgroundColor:'#f1f1f1'
                }
    return (
            
        <Grid container style={GridStyle} spacing={3} >

        
            <Grid item  xs={12} sm={12} >
                <NavApp/>
            </Grid>
            <Container>
            <h2> Clients </h2>
            </Container>
            {this.renderAddClient(!addClient)}
            {this.renderClientFrom(addClient)}
         
               
            <Container>
            <Paper> 
               
                <Table className="mt-4">
                <thead>
                    <tr>
                        <th witdh="10%">Name</th>
                        <th witdh="10%">Phone</th>
                        <th witdh="10%">Email</th>
                        <th witdh="10%">Age</th>
                        <th witdh="10%">Appartement</th>
                        <th witdh="10%">Time</th>
                        <th witdh="10%">X</th>
                        <th witdh="10%">More</th>
                        
                    </tr>
                </thead>
                <tbody>
                {rows}

                </tbody>
               
                </Table> 
            </Paper>   
                </Container>
            
         </Grid>   
          );
    }
// container of the form of client
    renderClientFrom(addClient ){
          const { Properties, Ages} = this.state;
        let agesList  =
        Ages.map( (age) =>
            <MenuItem value={age.id} key={age.id} >
                        {age.age} 
            </MenuItem>
        )
        let propertiesList  =
        Properties.map( (property) =>
            <MenuItem value={property.id}  key={property.id}  >
                        {property.type} 
            </MenuItem>
            
        )
     
        if (addClient) {
            
             return(
        
            <Container>
                
                <Paper style={{maxWidth:500, padding:'25px'}}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                           <div><InputLabel htmlFor="name">Name & Last Name</InputLabel></div> 
                           <div> <input type="text" name="name" id="name" onChange={this.handleChange}></input> </div> 
                        </FormGroup>
                        <FormGroup>
                          <div>  <InputLabel htmlFor="email">Email</InputLabel> </div>
                          <div>  <input type="text" name="email" id="email" onChange={this.handleChange}></input></div>
                        </FormGroup>
                        <FormGroup>
                        <div>   <InputLabel htmlFor="email">Phone</InputLabel>  </div> 
                        <div>   <input type="text" name="phone" id="phone" onChange={this.handleChange}></input>  </div> 
                        </FormGroup>
                        <FormGroup>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <div> <Select name="age" displayEmpty onChange={this.handleChangeDrop}>
                           <option  >Select Client Age </option>
                                {agesList}
                        </Select>  </div> 
                        </FormGroup>
                        <FormGroup>
                        <InputLabel id="demo-simple-select-label">Intersted by</InputLabel>
                      
                        <div> <Select name="property" labelId="demo-simple-select-label" displayEmpty onChange={this.handleChangeDrop}>
                            <option  >Select property type</option>
                                {propertiesList}
                        </Select>  </div> 
                        </FormGroup>
                        <FormGroup>
                           <UIButton color="primary" variant="outlined" type="submit"> Add </UIButton>{' '}
                           <UIButton color="secondary" variant="outlined" type="submit" onClick={e => this.setState({addClient : false})}> Cancel </UIButton>{' '}

                        </FormGroup>
                    </Form>
                </Paper>
            </Container>
        
            
        )
        }
        
    }

  //botton to render the form for clients  
    renderAddClient(flag){
        if (flag) {
        return(
           <Container>
           <FormGroup>
                     <UIButton color="primary" type="submit" variant="outlined" onClick={e => this.setState({addClient : true})}> Add New Client </UIButton>{' '}

            </FormGroup>
            </Container>
        );
        }
    }
    
  
}
 
export default Clients;