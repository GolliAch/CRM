import React, { Component } from 'react';
import LastClients from './LastClients';
import NavApp from "../NavApp";
import Stats from './AgesStats';
import MiniBoxes from './MiniBoxes';
import { Grid } from '@material-ui/core';
class Home extends Component {
    state = {  }
    render() { 
        const GridStyle=
        {
        // padding: '2px',
        //    margin: 'auto',
           // maxWidth: 1450,
           backgroundColor:'#f1f1f1'
          }
        return (
            
    
                
                
                
                
                <Grid container style={GridStyle} spacing={3} >
                     <Grid item  xs={12} sm={12} >
                        <NavApp/>
                    </Grid>
                    <Grid container style={{margin:'auto',maxWidth:1400}}spacing={3} >
                       
                        <Grid item sm={12}>
                        <br></br>
                        <MiniBoxes/>
                        </Grid>
                    
                
                        <Grid item xs={12}  sm={6}>
                        <br></br><br></br><br></br>
                        <Stats/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <br></br><br></br><br></br>
                        <LastClients/>
                        </Grid>
                    </Grid>
                    
                </Grid>
                

            );
    }
}
 
export default Home;