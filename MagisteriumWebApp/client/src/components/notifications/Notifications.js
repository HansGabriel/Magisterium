import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import moment from 'moment';
import uuid from 'uuid/v1';

const styles = theme => ({
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

const products = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];


class Notifications extends Component {

  render() {
    const { classes } = this.props;
        return (
            <React.Fragment>
                <Card>
                  <CardHeader
                    subtitle={`${products.length} in total`}
                    title="Latest products"
                  />
                  <Divider />
                  <CardContent className={classes.content}>
                    <List>
                      {products.map((product, i) => (
                        <ListItem
                          divider={i < products.length - 1}
                          key={product.id}
                        >
                          <ListItemAvatar>
                            <img
                              alt="Product"
                              className={classes.image}
                              src={product.imageUrl}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={product.name}
                            secondary={`Updated ${product.updatedAt.fromNow()}`}
                          />
                          <IconButton
                            edge="end"
                            size="small"
                          >
                            <MoreVertIcon />
                          </IconButton>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Divider />
                  <CardActions className={classes.actions}>
                    <Button
                      color="primary"
                      size="small"
                      variant="text"
                    >
                      View all <ArrowRightIcon />
                    </Button>
                  </CardActions>
                </Card>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
    studentprofile: state.studentprofile,
    message: state.message
});

export default connect(mapStateToProps)(withStyles(styles)(Notifications));

