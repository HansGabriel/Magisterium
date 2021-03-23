import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import image from '../../images/background-8.png';
import imageV from '../../images/background-8-v.png';
import '../profile/profile.css';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
     media: {
        objectFit: 'cover',
   },
});

class About extends Component {

    render() {

        const { classes } = this.props;
      
        return (
            <div>
              <div id="bg">
                <img src={image} id="image-h" alt="" />
                <img src={imageV} id="image-v" alt="" />
              </div>
              <div className="about padding20">
                    <Grid container spacing={16}>
                     <Grid item xs={12}>
                      <Typography variant="h3" align="center" className="about-text" id="lg-header">
                        A peer tutoring network for tutors and students.
                      </Typography>
                      <Typography variant="h5" align="center" className="about-text" id="sm-header">
                        A peer tutoring network for tutors and students.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" className="about-line"/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5" className="about-title" gutterBottom>
                        Accessibility.    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        Magistrum was created with accessibility in mind for broke ass niggas. Our goal is to make academic aid more accessible for students of all majors.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5" className="about-title" gutterBottom>
                        Simplicity.
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                       Simply register with your email to access the tutor search page!
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5" className="about-title" gutterBottom>
                        Diversity.    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        This online platform allows students to find tutors with a more diverse range of subjects than is offered through on-campus programs.
                      </Typography>
                    </Grid>
                     <Grid item xs={12}>
                      <Divider variant="middle" className="about-line"/>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" className="about-text">
                        Frequently Asked Questions
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" className="about-text" gutterBottom>
                        Is Magistrum connected to your email authentication?    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        No. In order to use Magistrum, you will need to create an account. You must pre-register with your email address.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" className="about-text" gutterBottom>
                        Why do I have to confirm my email address?    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        This is to ensure that you own your own email address in order for you to be emailed properly.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" className="about-text" gutterBottom>
                        What information do I have to provide as a tutor?    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        You will be asked to provide your field of study, a brief bio, your availability, if you want to be paid or are volunteering and what courses you can tutor.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" className="about-line"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="caption" align="center" gutterBottom className="about-text">
                            Developed 2021 ©IC-Tech
                        </Typography>
                    </Grid>
                  </Grid>
              </div>
            </div>
        );    
  }
}

About.propTypes = {
    classes: PropTypes.object.isRequired    
}

export default (withStyles(styles)(About));
