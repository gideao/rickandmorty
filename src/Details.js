import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    minWidth: 600,
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 30,
  }
});

class Details extends Component {

  render() {
    const { classes, details } = this.props;
    const { id, name, image, species, status, episode } = details;

    return (
      <Dialog open={this.props.open}
        className={classes.root}
        onClose={this.props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <Avatar alt="Remy Sharp" src={image} className={classes.avatar} />
          <DialogContentText id="alert-dialog-description">
            <Typography variant="headline" component="h3">
              Id: {id} <br/>
              Status: {status} <br/>
              Species: {species} <br/>
              Episode: {Object.keys(episode).join(', ')}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);
