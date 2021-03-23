import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import moment from 'moment'; 

// redux import
import { connect } from 'react-redux';
import { createMessage } from '../../redux/actions/messageActions';

// MUI imports
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  List,
  Select,
  Snackbar,
  SnackbarContent
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = theme => ({
    root: {},
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
     success: {
         backgroundColor: '#EEAF30'
     },
     message: {
       display: 'flex',
       alignItems: 'center',
     }
});


class Booking extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        meetup: '',
        starttime: '',
        duration: '',
        subjects: '',
        messageToast: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) this.setState({ errors: nextProps.errors });
        if (nextProps.studentprofile.profile) {
            this.setState({
                email: nextProps.studentprofile.profile.handle
            })
        }
        if (nextProps.auth.user) { 
            const fullName = nextProps.auth.user.firstname + " " + nextProps.auth.user.lastname
            this.setState({
                name: fullName
            })
        }
     }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, meetup, starttime, duration, subjects } = this.state;
        const { school, grade } = this.props.studentprofile.profile;
        const { receiverId } = this.props

        const time = moment(starttime).format('LLL')

        const bookingDetails = {
            receiverId,
             name,
             email,
             phone, 
             meetup,
             time,
             duration,
             school,
             grade,
             subjects
         } 

         console.log(receiverId);
         this.props.createMessage(bookingDetails, this.props.history);

         this.setState({ messageToast: true });
     }

    messageToastClose = () => {
        this.setState({ messageToast: false });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    render() {
        const { classes, subjects } = this.props;
        const { state, handleChange, onSubmit, messageToastClose } = this;
        const { name, email, phone, meetup, starttime, duration } = this.state;

        const subjectList = subjects.map((subject) =>
            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
        );
        var valid = false;
        if (name.length > 0 && email.length > 0 && phone.length > 0 && meetup.length > 0 && starttime.length > 0 && duration.length > 0 && this.state.subjects.length > 0) { 
            valid = true;
        } else {
            valid = false;
        }
        return (
        <React.Fragment>
              <form
                autoComplete="off"
                noValidate
                onSubmit={onSubmit}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        helperText="Please specify the your name"
                        label="Full name"
                        margin="dense"
                        name="name"
                        onChange={handleChange}
                        required
                        value={state.name}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Email Address"
                        margin="dense"
                        name="email"
                        onChange={handleChange}
                        required
                        value={state.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Phone Number"
                        margin="dense"
                        name="phone"
                        onChange={handleChange}
                        type="number"
                        value={state.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Meetup Place / Online"
                        margin="dense"
                        name="meetup"
                        onChange={handleChange}
                        value={state.meetup}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item 
                      md={6}
                      xs={12}
                    >
                        <TextField
                            fullWidth
                            id="datetime-local"
                            label="Starting Time"
                            margin="dense"
                            name="starttime"
                            onChange={handleChange}
                            required
                            type="datetime-local"
                            defaultValue={state.starttime}
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        helperText="Duration of tutor in hours"
                        label="Duration"
                        margin="dense"
                        name="duration"
                        onChange={handleChange}
                        type="number"
                        value={state.duration}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        md={6}
                    >
                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="subjects">Subject</InputLabel>
                            <Select  value={state.subjects} onChange={handleChange} MenuProps={{ style: {maxHeight: 300} }} inputProps={{
                                name: 'subjects',
                                id: 'subjects'
                            }}>
                                {subjectList}
                            </Select>
                        </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={!valid}
                  >
                    Submit
                  </Button>
                </CardActions>
              </form>
              <Snackbar 
                anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                open={state.messageToast}
                autoHideDuration={8000}
                onClose={messageToastClose}
                >
              <SnackbarContent
                className={classes.success}
                aria-describedby="client-snackbar"
                message={
                  <span id="client-snackbar" className={classes.message}>
                    <CheckCircleIcon className="toastIcon" />
                    Message sent successfully! Check you notifications for updates!
                  </span>
                }
              />
            </Snackbar>

        </React.Fragment>
      );
    }
}

Booking.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    studentprofile: state.studentprofile,
});

export default connect(mapStateToProps, { createMessage })(withStyles(styles)(Booking));
