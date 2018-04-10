import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const styles = {
  root: {
    height: 48,
    width: 600,
    margin: '0 auto',
  },
  grid: {
    margin: '0 auto',
  }
};

class Pagination extends Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 1);
  };

  handleBackButtonClick = event => {
    if(this.props.page === 1) return;
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    if(this.props.page === this.props.pages) return;
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(event, this.props.pages);
  };

  render() {
    const { classes, page, pages } = this.props;
    return(
      <Paper className={classes.root}>
        <Grid container justify={'center'} className={classes.grid}>
          <Grid item>
            <IconButton onClick={this.handleFirstPageButtonClick} aria-label="First Page" ><FirstPageIcon/></IconButton>
            <IconButton onClick={this.handleBackButtonClick} aria-label="Previous Page"><KeyboardArrowLeft/></IconButton>
            {page} of {pages}
            <IconButton onClick={this.handleNextButtonClick} aria-label="Next Page"><KeyboardArrowRight/></IconButton>
            <IconButton onClick={this.handleLastPageButtonClick} aria-label="Last Page"><LastPageIcon/></IconButton>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

export default withStyles(styles)(Pagination);
