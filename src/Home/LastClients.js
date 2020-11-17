import React, { Component } from 'react';

import Moment from 'react-moment';

import { Table, Container } from 'reactstrap';
import ClientInfo from '../Clients/ClientInfo';
import authHeader from '../services/auth-header';
import axios from 'axios';
import { Paper } from '@material-ui/core';

class LastClients extends Component {
    state = { 
        isLoading : true,
        Clients:[]
     }

     async componentDidMount(){
        const res = axios.get('/api/clients/1/5', { headers: authHeader() });
        this.setState({isLoading :  false, Clients :(await res).data});

     }
    render() { 
        const { Clients, isLoading} = this.state;
        const paperStyle=
                {
                padding: '10px',
                margin: 'auto',
               // backgroundColor:'#f1f1f1'
              }
        if (isLoading)
          return (<div>... Loading </div>)
        

        let rows=  
            Clients.map(clients => 
                <tr key={clients.id }>
                    
                    <td> {clients.name}</td>
                    <td> {clients.property.type} </td>

                    <td> <Moment date={clients.userdate} format="YYYY/MM/DD"/></td>
                   
                    <td> <ClientInfo id={clients.id}/></td>
                </tr>
                ) 
        return (
            <div>
                
                <Paper style={paperStyle}>
                <h3> Last 5 Clients</h3>
                 <Container fluid ="sm" style={{backgroundColor: '#f1f1f1'}}>
               
               <Table striped  hover  size="sm" className="mt-4">
               <thead>
                   <tr>
                       <th witdh="5%">Name</th>
                       <th witdh="5%">Appartement</th>
                       <th witdh="5%">Time</th>
                       <th witdh="5%">+</th>
                   </tr>
               </thead>
               <tbody>
               {rows}

               </tbody>
              
               </Table> 
               </Container>
               </Paper>
            </div>
          );
    }
}
 
export default LastClients;