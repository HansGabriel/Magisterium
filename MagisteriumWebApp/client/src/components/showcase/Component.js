import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// import components
import ProgressSpinner from '../common/ProgressSpinner';
import ProfileItem from './ProfileItem';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import SortIcon from '@material-ui/icons/SortByAlpha';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SubjectIcon from '@material-ui/icons/LibraryBooks';
import PaidIcon from '@material-ui/icons/AttachMoney';

// redux imports
import { connect } from 'react-redux';
import { getProfiles } from '../../redux/actions/profileActions';
import { getSubjects } from '../../redux/actions/subjectActions';

// MUI imports
import { withStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';

const styles = {
    card: {
        minWidth: 300,
    },
    padding20: {
        padding: 20,
    },
    marginLeft20: {
        marginLeft: 20,
    }
};

class ProfilesShowcase extends Component {
    render() {
        return (
        <React.Fragment>
            <Typography>Hello</Typography>
        </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    subjects: state.subjects,
});

export default connect(mapStateToProps, { getProfiles, getSubjects })(withStyles(styles)(ProfilesShowcase))

<DialogContent>
    <DialogContentText id="alert-dialog-description">
        In order to book, contact the tutor for negotiations. Payment could be done through: 
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
                        </Typography>                                                     <Typography
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
</DialogContent>