import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Button as UIButton} from '@material-ui/core/';
import axios from 'axios';
import authHeader from '../services/auth-header'

class RemoveButton extends Component {
    state = { openDelete: false }
    id = this.props.id;   


    async remove(id){
        // await fetch(`/api/clients/${id}` , {
        //   method: 'DELETE' ,
        //   headers : {
        //     'Accept' : 'application/json',
        //     'Content-Type' : 'application/json'
        //   }

        // });
        const url='/api/clients/'.concat(id);
        console.log(url);
        await axios.delete(url,{headers: authHeader()});
        window.location.reload(false);

    }
    
     setOpen= (boo) => {
     this.setState({openDelete:boo});
    }
     handleClickOpen = () => {
      console.log("removeId is " +this.id);
      console.log("handleClickOpen");
      this.setOpen(true);
    };
  
     handleCloseDelete = () => {
      console.log("handleClickClose");
      console.log("removeId is " )
      this.remove(this.id);
      this.setOpen(false);
    };
     handleCloseCancel = () => {
      console.log("handleClickClose");
      this.setOpen(false);
    };

    render() { 
        const {openDelete}=this.state;
        return ( 
            <div>
              <UIButton variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                Delete
              </UIButton>
              <Dialog
                open={openDelete}
                onClose={this.handleCloseCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Delete this User?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    By pressing delete, the client will be permanantly deleted.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <UIButton onClick={this.handleCloseDelete} color="primary">
                    Delete
                  </UIButton>
                  <UIButton onClick={this.handleCloseCancel} color="primary" autoFocus>
                    Cancel
                  </UIButton>
                </DialogActions>
              </Dialog>
            </div>
           
          );
    }
}
 
export default RemoveButton;