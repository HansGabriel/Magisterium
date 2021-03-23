import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux related
import { Provider } from 'react-redux';
import store from './redux/store';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import { clearCurrentProfile } from './redux/actions/profileActions';

// MUI imports
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

// components
import AdminRoute from './components/common/AdminRoute';
import PrivateRoute from './components/common/PrivateRoute';
import AppNavbar from './components/layout/AppNavbar';
import AppLanding from './components/layout/AppLanding';
import Register from './components/auth/Register';
import RegisterTutor from './components/auth/RegisterTutor';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Appointments from './components/appointments/Appointments';
import Notifications from './components/notifications/Notifications';
import CreateProfile from './components/profile/CreateProfile';
import CreateStudentProfile from './components/profile/CreateStudentProfile';
import EditProfile from './components/profile/EditProfile';
import EditStudentProfile from './components/profile/EditStudentProfile';
import Subjects from './components/admin/Subjects';
import ViewSubjects from './components/admin/ViewSubjects';
import EditSubjects from './components/admin/EditSubjects';
import Users from './components/admin/Users';
import About from './components/common/About';

import NotFound from './components/common/NotFound';

// containers
import ProfileShowcase from './components/showcase/ProfileShowcase';
import { checkAuth } from './utils/authPersist';

import Profile from './components/profile/Profile';

import UserConfirm from './components/auth/UserConfirm';

// Check for JWT for persistence
if (localStorage.jwtToken) {
  const decoded = checkAuth();
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());  
    // Redirect to login
    window.location.href = '/login';
  }
}

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  appBarSpacer: theme.mixins.toolbar,
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
        <Provider store={ store }>
          <Router>
            <div className="App">
              <CssBaseline />
              <AppNavbar />
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Switch>
                  <Route exact path="/" component={AppLanding} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/register-tutor" component={RegisterTutor} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/profile/:handle" component={Profile} />
                  <PrivateRoute exact path="/profiles" component={ProfileShowcase} />
                  <Route exact path="/not-found" component={NotFound} />
                  <Route exact path='/confirm/:id' component={UserConfirm} />
                  <Route exact path="/about" component={About} />
                  <PrivateRoute exact path="/profile" component={Dashboard}/>
                  <PrivateRoute exact path="/appointments" component={Appointments}/>
                  <PrivateRoute exact path="/notifications" component={Notifications}/>
                  <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                  <PrivateRoute exact path="/create-student-profile" component={CreateStudentProfile} />
                  <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                  <PrivateRoute exact path="/edit-student-profile" component={EditStudentProfile} />
                  <AdminRoute exact path="/subjects" component={Subjects} />
                  <AdminRoute exact path="/view-subjects" component={ViewSubjects} />
                  <AdminRoute exact path="/edit-subjects" component={EditSubjects} />
                  <AdminRoute exact path="/manage-users" component={Users} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </main>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default withStyles(styles)(App);
