import React, { Component, propTypes } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Axios from 'axios';
import authHeader from '../services/auth-header'
class ClientInfo extends Component {
    state = { 
        Open : false,
        Client : '',
        Keys : []
     }
     id = this.props.id;

    async componentDidMount(){
        const api= '/api/clients/';
        const toFetch= api.concat(this.id);

        //  const response=await fetch(toFetch);
        //  const body= await response.json();
        //  this.setState({Client : body });
      
        const res= Axios.get(toFetch,{ headers: authHeader() });
      
      this.setState({Client :(await res).data});
     }
    render() { 
        const { Client, Keys} = this.state;
       Object.keys(Client).map(key => 
            this.state.Keys.push({key})
       
        )
        let names= Keys.map( key =>
            <h1>{key['key']}</h1>
            )

        const handleClickOpen = () => {
            this.setState({Open:true})
        };

        const handleClose = () => {
        this.setState({Open:false})
        };
        const {Open}=this.state;
        return ( 
           
        <div>
        

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Client info
      </Button>
      <Dialog
        open={Open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Client informations"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

               {this.InfoForm(Client)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>

        );
    }

    InfoForm(Client){
      
      return(
        <Container maxWidth="sm">
        <InputLabel htmlFor="standard-adornment-password">Name & Last Name :</InputLabel>
      {Client['name']}{' '}
        </Container>
      );
    }
}
 
export default ClientInfo;