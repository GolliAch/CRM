import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import authHeader from '../services/auth-header';
import { Redirect } from "react-router-dom";
import { Paper } from '@material-ui/core';
class AgesStats extends Component {

    state = { 
        Ages:[],
        IsLoading : true,
    }
     

    async componentDidMount(){



        const res = axios.get('/api/clients/stats/ages', { headers: authHeader() });
        this.setState({isLoading :  false, Ages :(await res).data});
        // const response=await fetch('/api/clients/stats/ages');
        // const body= await response.json();
        // this.setState({Ages: body , isLoading : false});
        
   
    }
 

    render() {
   
        const {  Ages}=this.state; 
       
          
        
    let data = {
        labels: ['25-30', '30-45', '45-60', '60+', 'N/A'],
        datasets: [{
            label: 'Ages of Clients  in %',
            data: Ages  ,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    const paperStyle=
            {
               padding: '10px',
                margin: 'auto',
                maxWidth: 1200,
                //backgroundColor:'#f1f1f1'
              }

   return ( 
        
        
           
        
        <div> 
            <Paper style={paperStyle}>
                <h3>Clients by ages:</h3>
            <Container>
           

            <Doughnut ref={this.chartReference} data={data}  height={100}  />
            </Container>
            </Paper>
            
        </div> );
    }
}
 
export default AgesStats;