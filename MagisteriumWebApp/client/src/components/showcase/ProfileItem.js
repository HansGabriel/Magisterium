import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// redux import
import { connect } from 'react-redux';

// component import
import Booking from './Booking';

// MUI imports
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MailIcon from '@material-ui/icons/Email';
import CalendarIcon from '@material-ui/icons/EventAvailable';
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'fontWeightBold',
    },
    card: {
        maxWidth: 500,
        maxHeight: 500
    }
});

const truncateText = text => {
    if (text.length > 40) {
        const shortText = text.split(" ").splice(0, 6).join(" ") + "...";
        return shortText;
    }
    else if (text.length < 1) {
        return 'N.A.'
    }

    return text;
}

class ProfileItem extends Component {

    constructor(){
        super();
        this.state = {
            open: false
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.studentprofile.profile)
     }

    handleOpen = () => {
        console.log("handleOpen")
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        console.log("handleClose")
        this.setState({
            open: false
        })
    };

    render() {
        const { profile, auth, onClick, classes, studentprofile } = this.props;
        const { open } = this.state;

        const classesCard = profile.courses !== undefined ? (
            <React.Fragment>
                {profile.courses.slice(0, 5).map((myClass, index) => (
                    <Tooltip key={index} title={myClass.courseName}>
                        <Chip className="chip" label={`${myClass.courseId} ${myClass.courseNumber}`} />
                    </Tooltip>
                ))}
            </React.Fragment>

        ) : (
            <p>No classes listed</p>
        )

        // Create initials and short version of name for use on card
        const firstname = profile.user.firstname === null ? 'NA' : profile.user.firstname;
        const lastname = profile.user.lastname === null ? 'NA' : profile.user.lastname;
        const initials =  (firstname && lastname) ? firstname.charAt(0) + lastname.charAt(0) : '';
        const shortname = (firstname && lastname) ? firstname + " " + lastname.charAt(0) + '.' : '';

        const profileEmail = profile.user.email === null ? 'NA' : profile.user.email;

        const subjects = [...profile.major, ...profile.minor]
        const majors = profile.major.join(", ");
        const minors = (profile.minor.length > 0) ? profile.minor.join(", ") : "";
        const headerText = profile.type === "Paid" ?
            <span>{shortname}<span className="tag">$$$</span></span>
            : <span>{shortname}</span>;
        const subheaderText = (minors.length > 0) ? majors + " (" + minors + ")" : majors;

        return (
        <React.Fragment>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                    <CardHeader
                      className="cardHeader"
                      avatar={
                        <Avatar className="purpleAvatar">
                          {initials}
                        </Avatar>
                      }
                      title={headerText}
                      subheader={subheaderText}
                    />
                    <CardContent>
                        <div className="spaceBelow">
                            {classesCard}
                        </div>
                        <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <MailIcon className="icon"/>
                            </Grid>
                            <Grid item xs>
                                <Typography>{profileEmail}</Typography>
                            </Grid>
                        </Grid>
                        {profile.bio &&
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <InfoIcon className="icon"/>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{truncateText(profile.bio)}</Typography>
                                </Grid>
                            </Grid>
                        }
                        {profile.availability &&
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <CalendarIcon className="icon"/>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{truncateText(profile.availability)}</Typography>
                                </Grid>
                            </Grid>
                        }
                        {profile.attainment &&
                        <Grid container wrap="nowrap" spacing={16}>
                              <Grid item>
                                  <SchoolIcon className="icon"/>
                              </Grid>
                              <Grid item xs>
                                <Typography>{profile.attainment}</Typography>
                              </Grid>
                        </Grid>}
                    </CardContent>
                    <CardActions>
                    <Button component={Link}
                        onClick={onClick}
                        size="small"
                        color="inherit"
                        to={`/profile/${profile.handle}`}
                    >
                        View Profile
                    </Button>
                    {profile.user._id !== auth.user.id &&
                        <Button
                            size="small"
                            className="colorPurple"
                            href={`mailto:${profile.user.email}`}
                        >
                            Email Tutor
                        </Button>
                    }
                    {auth.isAuthenticated && profile.user._id === auth.user.id &&
                        <Button component={Link}
                            size="small"
                            to={`/edit-profile`}
                            className="colorPurple"
                        >
                            Edit Profile
                        </Button>
                    }
                    {profile.user._id !== auth.user.id && !auth.user.isTutor && Object.keys(studentprofile.profile).length > 0 &&
                        <React.Fragment>
                            <Button
                                size="small"
                                className="colorPurple"
                                onClick={this.handleOpen}
                            >
                                Book Tutor
                            </Button>
                            <Dialog
                                open={open}
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                            <DialogTitle id="alert-dialog-title">{"Booking Details"}</DialogTitle>
                            <DialogContent>
                                <Booking subjects={subjects} receiverId={profile.user._id} />
                            </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary" autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                              </Dialog>
                        </React.Fragment>
                    }
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
      );
    }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    studentprofile: state.studentprofile
});

export default connect(mapStateToProps)(withStyles(styles)(ProfileItem));
