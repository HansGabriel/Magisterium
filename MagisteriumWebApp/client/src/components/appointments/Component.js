<TableBody>
  {messages.slice(0, rowsPerPage).map(user => (
    <TableRow
      className={classes.tableRow}
      hover
      key={user.id}
      selected={selectedUsers.indexOf(user._id) !== -1}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={selectedUsers.indexOf(user._id) !== -1}
          color="primary"
          onChange={event => this.handleSelectOne(event, user._id)}
          value="true"
        />
      </TableCell>
      <TableCell>
        <div className={classes.nameContainer}>
          <Avatar
            className={classes.avatar}
            src={user.avatarUrl}
          >
            {user.name}
          </Avatar>
          <Typography variant="body1">{user.name}</Typography>
        </div>
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        {user.meetup}
      </TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>
        {user.time}
      </TableCell>
      <TableCell>
        {user.duration}
      </TableCell>
    </TableRow>
  ))}
</TableBody>












import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProgressSpinner from '../common/ProgressSpinner';

import { connect } from 'react-redux';
import { getMessages } from '../../redux/actions/messageActions';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
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
  TablePagination
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import uuid from 'uuid/v1';


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

const users = [
  {
    id: uuid(),
    name: 'Ekaterina Tankova',
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    email: 'ekaterina.tankova@devias.io',
    phone: '304-428-3097',
    avatarUrl: '/images/avatars/avatar_3.png',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Cao Yu',
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      street: '1865  Pleasant Hill Road'
    },
    email: 'cao.yu@devias.io',
    avatarUrl: '/images/avatars/avatar_4.png',
    phone: '712-351-5711',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Alexa Richardson',
    address: {
      country: 'USA',
      state: 'Georgia',
      city: 'Atlanta',
      street: '4894  Lakeland Park Drive'
    },
    email: 'alexa.richardson@devias.io',
    phone: '770-635-2682',
    avatarUrl: '/images/avatars/avatar_2.png',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Anje Keizer',
    address: {
      country: 'USA',
      state: 'Ohio',
      city: 'Dover',
      street: '4158  Hedge Street'
    },
    email: 'anje.keizer@devias.io',
    avatarUrl: '/images/avatars/avatar_5.png',
    phone: '908-691-3242',
    createdAt: 1554930000000
  },
  {
    id: uuid(),
    name: 'Clarke Gillebert',
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'Dallas',
      street: '75247'
    },
    email: 'clarke.gillebert@devias.io',
    phone: '972-333-4106',
    avatarUrl: '/images/avatars/avatar_6.png',
    createdAt: 1554757200000
  },
  {
    id: uuid(),
    name: 'Adam Denisov',
    address: {
      country: 'USA',
      state: 'California',
      city: 'Bakerfield',
      street: '317 Angus Road'
    },
    email: 'adam.denisov@devias.io',
    phone: '858-602-3409',
    avatarUrl: '/images/avatars/avatar_1.png',
    createdAt: 1554670800000
  },
  {
    id: uuid(),
    name: 'Ava Gregoraci',
    address: {
      country: 'USA',
      state: 'California',
      city: 'Redondo Beach',
      street: '2188  Armbrester Drive'
    },
    email: 'ava.gregoraci@devias.io',
    avatarUrl: '/images/avatars/avatar_7.png',
    phone: '415-907-2647',
    createdAt: 1554325200000
  },
  {
    id: uuid(),
    name: 'Emilee Simchenko',
    address: {
      country: 'USA',
      state: 'Nevada',
      city: 'Las Vegas',
      street: '1798  Hickory Ridge Drive'
    },
    email: 'emilee.simchenko@devias.io',
    phone: '702-661-1654',
    avatarUrl: '/images/avatars/avatar_8.png',
    createdAt: 1523048400000
  },
  {
    id: uuid(),
    name: 'Kwak Seong-Min',
    address: {
      country: 'USA',
      state: 'Michigan',
      city: 'Detroit',
      street: '3934  Wildrose Lane'
    },
    email: 'kwak.seong.min@devias.io',
    avatarUrl: '/images/avatars/avatar_9.png',
    phone: '313-812-8947'
  },
  {
    id: uuid(),
    name: 'Merrile Burgett',
    address: {
      country: 'USA',
      state: 'Utah',
      city: 'Salt Lake City',
      street: '368 Lamberts Branch Road'
    },
    email: 'merrile.burgett@devias.io',
    phone: '801-301-7894',
    avatarUrl: '/images/avatars/avatar_10.png',
    createdAt: 1522702800000
  }
];


class Notifications extends Component {
  state = {
    rowsPerPage: 10,
    selectedUsers: [],
    page: 0,
  }

  componentDidMount() {
    console.log(this.props.auth.user.id)
    this.props.getMessages(this.props.auth.user.id)
  }

  handleSelectAll = event => {

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map(user => user.id);
    } else {
      selectedUsers = [];
    }

    this.setState({
      selectedUsers: selectedUsers
    });
  };

  handleSelectOne = (event, id) => {
    const { selectedUsers } = this.state;
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    this.setState({
      selectedUsers: newSelectedUsers
    })
  };

  handlePageChange = (event, page) => {
    this.setState({
      page: page
    })
  };

  handleRowsPerPageChange = event => {
    this.setState({
      rowsPerPage: event.target.value
    })
  };

  render() {
      const { classes } = this.props;
      const { user } = this.props.auth;
      const { messages, loading } = this.props.message;
      const { rowsPerPage, selectedUsers, page } = this.state;

      let notificationContent;

      if (user.isTutor) {
        if (messages === null || loading) {
          notificationContent = <ProgressSpinner />
        } else {
           notificationContent = Object.keys(messages).length > 0 ? (
            <Card>
              <CardContent className={classes.content}>
                <PerfectScrollbar>
                  <div className={classes.inner}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={selectedUsers.length === users.length}
                              color="primary"
                              indeterminate={
                                selectedUsers.length > 0 &&
                                selectedUsers.length < users.length
                              }
                              onChange={this.handleSelectAll}
                            />
                          </TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Meetup Address/Online site</TableCell>
                          <TableCell>Phone</TableCell>
                          <TableCell>Meeting Time</TableCell>
                          <TableCell>Duration (in hours)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {messages.slice(0, rowsPerPage).map(user => (
                          <TableRow
                            className={classes.tableRow}
                            hover
                            key={user.id}
                            selected={selectedUsers.indexOf(user._id) !== -1}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={selectedUsers.indexOf(user._id) !== -1}
                                color="primary"
                                onChange={event => this.handleSelectOne(event, user._id)}
                                value="true"
                              />
                            </TableCell>
                            <TableCell>
                              <div className={classes.nameContainer}>
                                <Avatar
                                  className={classes.avatar}
                                  src={user.avatarUrl}
                                >
                                  {user.name}
                                </Avatar>
                                <Typography variant="body1">{user.name}</Typography>
                              </div>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              {user.meetup}
                            </TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                              {user.time}
                            </TableCell>
                            <TableCell>
                              {user.duration}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </PerfectScrollbar>
              </CardContent>
              <CardActions className={classes.actions}>
                <TablePagination
                  component="div"
                  count={users.length}
                  onChangePage={this.handlePageChange}
                  onChangeRowsPerPage={this.handleRowsPerPageChange}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[5, 10, 25]}
                />
              </CardActions>
            </Card> ) : (
              <Typography>Hello</Typography>
            )
        }
      }
        return (
            <React.Fragment>
              <div className="padding20">
                  <Typography variant="h4" component="h1" align="center" className="editHeading">
                      Notifications
                  </Typography>
                  <br/>
              </div>
              {notificationContent}
              
            </React.Fragment>
        );
    }
}

Notifications.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
    studentprofile: state.studentprofile,
    message: state.message
});

export default connect(mapStateToProps, { getMessages })(withStyles(styles)(Notifications));


{messages.map(user => (
  <TableRow>                           
    <TableCell>{user.email}</TableCell>
    <TableCell>
      {user.meetup}
    </TableCell>
    <TableCell>{user.phone}</TableCell>
    <TableCell>
      {user.time}
    </TableCell>
    <TableCell>
      {user.duration}
    </TableCell>
  </TableRow>
))}