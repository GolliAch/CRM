import { Grid, Typography, Paper, Box } from '@material-ui/core';
import React, { Component } from 'react';
class MiniBoxes extends Component {
    state = { 

     }


    render() { 
        const style= {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
          }
          const paperStyle=
            {
               padding: '25px',
                margin: 'auto',
                maxWidth: 1200,
              //  backgroundColor:'#f1f1f1'
              }
              
          
        return (
            <Paper style={paperStyle}>
        <Grid container  sm={12} spacing={2}>

            <Grid container sm={4} >
                     <Grid item xs={12} sm={12}>
     
                     <img  alt="complex2" src="https://www.flaticon.com/svg/static/icons/svg/1006/1006555.svg" width="120" height="120" style={style}/> 
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <Typography align='center'>
                         <Box fontWeight="fontWeightBold" m={1 } >
                            New Clients this month: 12
                         </Box>        
                     </Typography>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <Typography align='center'>  Total Clients: 300</Typography>
                     </Grid>
     
     
             </Grid>
                    
            <Grid container sm={4} >
                     <Grid item xs={12} sm={12}>
     
                     <img  alt="complex2" src="https://www.flaticon.com/svg/static/icons/svg/609/609803.svg" width="120" height="120" style={style}/> 
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <Typography align='center'>
                         <Box fontWeight="fontWeightBold" m={1 } >
                            New Clients this month: 12
                         </Box>        
                     </Typography>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <Typography align='center'>  Total Clients: 300</Typography>
                     </Grid>
     
     
             </Grid>

            <Grid container sm={4} spacing={12}>
                     <Grid item xs={12} sm={12}>
     
                     <img  alt="complex2" src="https://www.flaticon.com/svg/static/icons/svg/2139/2139009.svg" width="120" height="120" style={style}/> 
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <Typography align='center'>
                         <Box fontWeight="fontWeightBold" m={1 } >
                            New Clients this month: 12
                         </Box>        
                     </Typography>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <Typography align='center'>  Total Clients: 300</Typography>
                     </Grid>
     
     
             </Grid>
        </Grid>
 
        </Paper>

            


         );
    }
}
 
export default MiniBoxes;