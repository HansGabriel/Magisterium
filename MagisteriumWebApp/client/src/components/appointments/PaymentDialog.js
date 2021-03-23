import React, { Component } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  Input,
  Typography,
  Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {},
    content: {
      padding: 0
    },
    inner: {
      minWidth: 1050
    },
    nameContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      marginRight: 10
    },
    actions: {
      justifyContent: 'flex-end'
    },
    card: {
      minWidth: 300,
      margin: 100
    },
    marginBottom20: {
        marginBottom: 20,
    },
    marginTop20: {
        marginTop: 20,
    },
    purpleHeader: {
        margin: 10,
        color: '#fff',
        backgroundColor: '#1E1656',
     },
     purpleText: {
         color: '#1E1656'
     },
     media: {
        objectFit: 'cover',
     },
     success: {
         backgroundColor: '#EEAF30'
     },
     message: {
       display: 'flex',
       alignItems: 'center',
     }
});



const PaymentDialog = (props) => {
	const { dialogOpen, handleClose, message, classes } = props;

	return (
		<Dialog
		    open={dialogOpen}
		    onClose={handleClose}
		    aria-labelledby="alert-dialog-title"
		    aria-describedby="alert-dialog-description"
		  >                  
		    <DialogContent>
		        <DialogContentText id="alert-dialog-description">
		            Payment could be done through these branches: 
		        </DialogContentText>
		        <List>
		            <ListItem alignItems="flex-start">
		                <ListItemText
		                    primary={
		                        <Typography
		                            className={classes.heading}
		                        > 
		                            Palawan Pawnshop
		                        </Typography>
		                    }
		                    secondary={
		                        <React.Fragment>
		                            <Typography
		                                color="textPrimary"
		                            >
		                                Sender: Must be the name of student
		                            </Typography>
		                            <Typography
		                                color="textPrimary"
		                            >
		                                Receiver: Book A Tutor ID # 16-0005-81
		                            </Typography>
		                        </React.Fragment>
		                    }
		                />
		            </ListItem>
		            <ListItem alignItems="flex-start">
		                <ListItemText
		                    primary={
		                        <Typography
		                            className={classes.heading}
		                        > 
		                            Banco De Oro
		                        </Typography>
		                    }
		                    secondary={
		                        <React.Fragment>
		                            <Typography
		                                color="textPrimary"
		                            >
		                                Swift Code – BNORPHMM
		                            </Typography>                                                     
		                            <Typography
		                                color="textPrimary"
		                            >
		                                Branch: Iznart, Iloilo City
		                            </Typography>
		                            <Typography
		                                color="textPrimary"
		                            >
		                                SA # 1780018868
		                            </Typography> 
		                        </React.Fragment>
		                    }
		                />
		            </ListItem>
		            <ListItem alignItems="flex-start">
		                <ListItemText
		                    primary={
		                        <Typography
		                            className={classes.heading}
		                        > 
		                            Metrobank
		                        </Typography>
		                    }
		                    secondary={
		                        <React.Fragment>
		                            <Typography
		                                color="textPrimary"
		                            >
		                                Swift Code – MBTCPHMM
		                            </Typography>
		                            <Typography
		                                color="textPrimary"
		                            >
		                                Branch: Jaro, Iloilo City
		                            </Typography>
		                            <Typography
		                                color="textPrimary"
		                            >
		                                SA # 375-3-375086515
		                            </Typography>
		                        </React.Fragment>
		                    }
		                />
		            </ListItem>
		        </List>
		        <DialogContentText id="alert-dialog-description">
		            Afterwhich, send a picture of the receipt below: 
		        </DialogContentText>
		        <br />
		        <Button
		          variant="contained"
		          component="label"
		          color="primary"
		        >
		          Upload File
		          <input
		            type="file"
		            style={{ display: "none" }}
		          />
		        </Button>   
		    </DialogContent>
		  </Dialog>
		)
};

export default (withStyles(styles)(PaymentDialog));