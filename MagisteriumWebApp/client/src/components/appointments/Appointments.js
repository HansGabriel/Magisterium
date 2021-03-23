import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProgressSpinner from '../common/ProgressSpinner';

import { connect } from 'react-redux';
import { getMessages, declineMessage, acceptMessage } from '../../redux/actions/messageActions';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';
import PaymentDialog from './PaymentDialog'
import {
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Tooltip,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  Input,
  Paper
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import _ from 'lodash';
import { removeByMatch } from '../../utils/lodashOps';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
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
     success: {
         backgroundColor: '#EEAF30'
     },
     message: {
       display: 'flex',
       alignItems: 'center',
     }
});


class Appointments extends Component {
  state = {
    rowsPerPage: 10,
    selectedUsers: [],
    page: 0,
    messages: [],
    enableToastOpen: false,
    enableToastMsg: '',
    dialogOpen: false,
    amount: 0,
    errors: {}
  }

  componentDidMount() {
    const { id, isTutor } = this.props.auth.user
    this.props.getMessages(id, isTutor)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
    if (nextProps.message.messages) {
        this.setState({
            messages: nextProps.message.messages
        });
    }
  }

  paymentAmount = (attainment, duration) => {
    var amount = 0
    if (attainment === "Student") {
      amount = 100
    }
    else if (attainment === "Bachelor's Degree") {
      amount = 150
    }
    else if (attainment === "Master's Degree") {
      amount = 200
    }
    else if (attainment === "Doctor's Degree") {
      amount = 250
    }
    else {
      amount = 50
    }
    amount = 1.2*amount*duration 
    return amount
  }

  handleClickOpen = () => {
    this.setState({
      dialogOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      dialogOpen: false
    })
  }

  handleEnableClose = () => {
    this.setState({ enableToastOpen: false });
  };

  selectAccept = (e, userId, user, message, setting) => {
     e.preventDefault();
     console.log(message)
    // if (setting === 'accept') this.props.enableProfileByUser(userId);
    // else if (setting === 'decline') this.props.disableProfileByUser(userId);
    if (this.state.messages.length === 1) {
      let msgType = (setting === 'accept') ? "accepted" : "declined";
      let updatedMessage = this.state.messages;
      let msg;
      if (setting === 'accept') {
        msg = "You have " + msgType + " " + updatedMessage[0].userdetails[0].firstname + " " + updatedMessage[0].userdetails[0].lastname + ". You will be notified by email.";
        this.props.acceptMessage(message, message.receiverId, message.senderId);
      } else {
        msg = "You have " + msgType + " " + updatedMessage[0].userdetails[0].firstname + " " + updatedMessage[0].userdetails[0].lastname;
        this.props.declineMessage(message, user)
      }
      this.setState({
        messages: [],
        enableToastOpen: true,
        enableToastMsg: msg
      })
    } else {
      let messages = [...this.state.messages];
      let updatedMessage = removeByMatch(messages, function(message) { return message._id !== userId; });
      let msgType = (setting === 'accept') ? "accepted" : "declined";
      let msg;
      if (setting === 'accept') {
        msg = "You have " + msgType + " " + updatedMessage[0].userdetails[0].firstname + " " + updatedMessage[0].userdetails[0].lastname + ". You will be notified by email.";
        this.props.acceptMessage(message, message.receiverId, message.senderId)
      } else {
        msg = "You have " + msgType + " " + updatedMessage[0].userdetails[0].firstname + " " + updatedMessage[0].userdetails[0].lastname;
        this.props.declineMessage(message, user)
      }

      this.setState({
           messages: updatedMessage,
           enableToastOpen: true,
           enableToastMsg: msg
       });
    }
 }

  render() {
      const { classes } = this.props;
      const { user } = this.props.auth;
      const { loading } = this.props.message;
      const { rowsPerPage, selectedUsers, page, messages, dialogOpen, paymentAmount } = this.state;

      let notificationContent;

      if (user.isTutor) {
        if (messages === null || loading) {
          notificationContent = <ProgressSpinner />
        } else {
           notificationContent = Object.keys(messages).length > 0 ? (
            <Paper className={classes.root}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Meetup Address/Online site</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Meeting Time</TableCell>
                    <TableCell>Duration (in hours)</TableCell>
                    <TableCell>Subject to teach</TableCell>
                    <TableCell>Accept or Reject</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {messages.map(message => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={message._id}
                      selected={selectedUsers.indexOf(message._id) !== -1}
                    >
                      <TableCell>
                        <div className={classes.nameContainer}>
                          <Avatar
                            className="purpleAvatar"
                          >
                            {message.userdetails[0].firstname.charAt(0) + message.userdetails[0].lastname.charAt(0)} 
                          </Avatar>
                          <Typography variant="body1">{message.userdetails[0].firstname + " " + message.userdetails[0].lastname}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>
                        {message.meetup}
                      </TableCell>
                      <TableCell>{message.phone}</TableCell>
                      <TableCell>
                        {message.time}
                      </TableCell>
                      <TableCell>
                        {message.duration}
                      </TableCell>
                      <TableCell>
                        {message.subjects}
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Accept Student">
                          <span><IconButton>
                              <CheckCircleIcon onClick={((e) => this.selectAccept(e, message._id, user, message, 'accept'))} />
                          </IconButton></span>
                        </Tooltip>
                        <Tooltip title="Decline Student">
                          <span><IconButton>
                              <CancelIcon onClick={((e) => this.selectAccept(e, message._id ,user, message, 'decline'))} />
                          </IconButton></span>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
             ) : (
              <Grid item xs={12}>
                  <div className="padding20">
                      <Typography align="center" className="colorBlue"><WarningIcon id="warning"/> </Typography>
                      <Typography variant="h4" align="center" gutterBottom>No appointments found.</Typography>
                      <Typography variant="subtitle1" align="center">Check later for possible tutor appointments.</Typography>
                  </div>
              </Grid>
            )
        }
      } else {
        if (messages === null || loading) {
          notificationContent = <ProgressSpinner />
        } else {
          notificationContent = Object.keys(messages).length > 0 ? (
            <Paper className={classes.root}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Appointment Details</TableCell>
                    <TableCell>Payment Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {messages.map(message => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={message._id}
                    >
                      <TableCell>
                        <div className={classes.nameContainer}>
                          <Typography variant="body1">{message.userdetails[0].firstname + " " + message.userdetails[0].lastname} has accepted your appointment on {message.time} and to meet at {message.meetup} for {message.duration} hours for the subject {message.subjects}. Please pay PHP {this.paymentAmount(message.profiledetails[0].attainment, message.duration)}.</Typography>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                          Pay Here
                        </Button>
                          <PaymentDialog dialogOpen={dialogOpen} handleClose={this.handleClose} message={message} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
             ) : (
            <Grid item xs={12}>
                <div className="padding20">
                    <Typography align="center" className="colorBlue"><WarningIcon id="warning"/> </Typography>
                    <Typography variant="h4" align="center" gutterBottom>No appointments found.</Typography>
                    <Typography variant="subtitle1" align="center">Check later for possible tutor appointments.</Typography>
                </div>
            </Grid>
            )
        }
      }
        return (
            <React.Fragment>
              <div className="padding20">
                  <Typography variant="h4" component="h1" align="center" className="editHeading">
                      Appointments
                  </Typography>
                  <br/>
              </div>
              {notificationContent}
              <Snackbar 
                anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                open={this.state.enableToastOpen}
                autoHideDuration={4000}
                onClose={this.handleEnableClose}
                >
              <SnackbarContent
                className={classes.success}
                aria-describedby="client-snackbar"
                message={
                  <span id="client-snackbar" className={classes.message}>
                    <CheckCircleIcon className="toastIcon" />
                    {this.state.enableToastMsg}
                  </span>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={this.handleEnableClose}
                  >
                    <CloseIcon className={classes.icon} />
                  </IconButton>,
                ]}
              />
            </Snackbar>
              
            </React.Fragment>
        );
    }
}

Appointments.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
    studentprofile: state.studentprofile,
    message: state.message
});

export default connect(mapStateToProps, { getMessages, declineMessage, acceptMessage })(withStyles(styles)(Appointments));

