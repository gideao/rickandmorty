import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class Gallery extends Component {

  render() {
    const { error, isLoaded, items, info, currentPage } = this.state;
    const { classes } = this.props;
    return (
      <Grid container justify={'center'} direction={'row'} alignItems={'center'}  spacing={16}>
        {items.map(item => (
          <Grid key={item.id} item>
            <Character name={item.name} stuts={item.status} species={item.species} image={item.image}/>
          </Grid>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        ))}
      </Grid>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles()(List));
