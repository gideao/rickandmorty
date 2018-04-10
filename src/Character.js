import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

import Details from './Details';

const styles = theme => ({
  card: {
    width: 230,
  },
  media: {
    height: 200,
  }
});

class Character extends Component {
  constructor(props) {
    super(props);
    this.handleOpenDetailsEvent = this.handleOpenDetailsEvent.bind(this);
    this.handleCloseDetailsEvent = this.handleCloseDetailsEvent.bind(this);
  }

  state = {
    showDetails: false,
  }

  handleOpenDetailsEvent(event) {
    this.setState({ showDetails: true});
  }

  handleCloseDetailsEvent(event) {
    this.setState({ showDetails: false});
  }

  render() {
    const { classes, details } = this.props;
    const { showDetails } = this.state

    return (
      <div>
        <Card className={classes.card}  onClick={this.handleOpenDetailsEvent} >
          <CardMedia className={classes.media} image={details.image}/>
          <CardContent onClick={this.handleOpenDetailsEvent}>
            <Typography gutterBottom variant="headline" component="h2">
              {details.name}
            </Typography>
          </CardContent>
        </Card>
        <Details open={showDetails} onClose={this.handleCloseDetailsEvent} details={details}/>
      </div>
    );
  }
}

Character.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

export default withStyles(styles)(Character);
