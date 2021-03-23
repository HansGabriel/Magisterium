import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudentProfile } from '../../redux/actions/profileActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './profile.css';
import { filterArrDuplicates, sortArrByAscending, filterByOptions, findFirstMatch } from '../../utils/lodashOps';

class CreateStudentProfile extends Component {
 state = {
     bio: '',
     grade: '',
     school: '',
     errors: {}
 }

 onSubmit = e => {
     e.preventDefault();
     const { bio, grade, school } = this.state;
     const handle = this.props.auth.user.email.replace("@up.edu", "");

     const profileData = {
         handle,
         bio,
         grade, 
         school
     }

     this.props.createStudentProfile(profileData, this.props.history);
 }

 onChange = e => {
  this.setState({[e.target.name]: e.target.value});
 }

render() {
    const { bio, grade, school } = this.state;  

    ///enforcing major & type to be required
    var valid = false;
    if(grade.length > 0 && school.length > 0) { 
        valid = true;
    } else {
        valid = false;
    }

    return (
      <div className="padding20">
            <Typography variant="h4" component="h1" align="center" className="editHeading">
                Create Student Profile
            </Typography>
            <form onSubmit={this.onSubmit}>    
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Grade">Grade Level</InputLabel>
                            <Select required variant="outlined" value={grade} onChange={this.onChange} MenuProps={{ style: {maxHeight: 300} }}
                              inputProps={{
                                  name: 'grade',
                                  id: 'grade'
                              }}>
                                <MenuItem value=""></MenuItem>
                                <MenuItem value="Grade 1">Grade 1</MenuItem>
                                <MenuItem value="Grade 2">Grade 2</MenuItem>
                                <MenuItem value="Grade 3">Grade 3</MenuItem>
                                <MenuItem value="Grade 4">Grade 4</MenuItem>
                                <MenuItem value="Grade 5">Grade 5</MenuItem>
                                <MenuItem value="Grade 6">Grade 6</MenuItem>
                                <MenuItem value="Grade 7">Grade 7</MenuItem>
                                <MenuItem value="Grade 8">Grade 8</MenuItem>
                                <MenuItem value="Grade 9">Grade 9</MenuItem>
                                <MenuItem value="Grade 10">Grade 10</MenuItem>
                                <MenuItem value="Grade 11">Grade 11</MenuItem>
                                <MenuItem value="Grade 12">Grade 12</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="School">School</InputLabel>
                          <Input type="text" id="School" name="school" value={school} multiline fullWidth onChange={this.onChange}>
                          </Input>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl margin="normal" required fullWidth>
                          <InputLabel htmlFor="bio">Short Bio</InputLabel>
                          <Input type="text" id="bio" name="bio" value={bio} multiline fullWidth onChange={this.onChange}>
                          </Input>
                        </FormControl>
                    </Grid>
                 </Grid>
              <Grid container justify="flex-end" spacing={24}>
                <Grid item>
                  <Button aria-label="Cancel" align="right" type="cancel" className="Button" component={Link} to="/profile">
                    Cancel
                  </Button>
                </Grid> 
                <Grid item>   
                  <Button align="right" type="submit" variant="outlined" color="inherit" className="button" disabled={!valid}>Submit</Button>
                </Grid>
              </Grid>
            </form>
      </div>
    )
  }
}

CreateStudentProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors,
    auth: state.auth
});

export default connect(mapStateToProps, { createStudentProfile })(withRouter(CreateStudentProfile));
