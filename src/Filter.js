import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formulary: {
    display: 'flex',
    width: '100%',
  }
});

class Filter extends Component {

  state = { name: '' };

  handleFieldChange = event => {
    this.setState({ name: event.target.value });
  };

  handleButtonClick = event => {
    this.props.onSubmission(event, this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={6} className={classes.container} alignItems={'flex-end'} spacing={16}>
          <Grid item xs={9}>
            <TextField
              id="full-width"
              onChange={this.handleFieldChange}
              placeholder="Name"
              fullWidth
              margin="normal" />
          </Grid>
          <Grid item xs>
            <Button variant="raised" className={classes.button} onClick={this.handleButtonClick}>Search</Button>
          </Grid>
      </Grid>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmission: PropTypes.func.isRequired,
};

export default withStyles(styles)(Filter);
