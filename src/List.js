import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles'

import Character from  './Character';
import Filter from './Filter';
import Pagination from './Pagination';
import withRoot from './withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    margin: '0 auto',
  }
});

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      info: null,
      fakePage: 1,
      filter: {},
      items: []
    };
    this.handlePaginationEvent = this.handlePaginationEvent.bind(this);
    this.handleFilterEvent = this.handleFilterEvent.bind(this);
  }

  componentDidMount() {
    this.loadItems(1, {});
  }

  sliceItems(items, page) {
    const startFrom = page % 2 ? 0 : 10;
    const upTo = page % 2 ? 10 : items.length;
    return items.slice(startFrom, upTo);
  }

  loadItems(fakePage, filter){
    const page = Math.ceil(fakePage / 2);
    const merge = Object.assign({page: page}, filter);
    const params = Object.entries(merge).map(element => `${element[0]}=${element[1]}`).join('&');
    const url = `https://rickandmortyapi.com/api/character/?${params}`;

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            info: result.info,
            currentPage: fakePage,
            items: this.sliceItems(result.results, fakePage)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handlePaginationEvent(event, page) {
    const filter = this.state.filter;
    this.loadItems(page, filter);
  }

  handleFilterEvent(event, filter) {
    this.setState({ pageCurrent: 1, filter: filter });
    this.loadItems(1, filter);
  }

  render() {
    const { error, isLoaded, items, info, currentPage } = this.state;
    const { classes } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify={'center'} direction={'row'} alignItems={'center'}  spacing={16}>
              <Filter onSubmission={this.handleFilterEvent}/>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify={'center'} direction={'row'} alignItems={'center'}  spacing={16}>
              {items.map(item => (
                <Grid key={item.id} item>
                  <Character details={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Pagination
              pages={Math.ceil(info.count/10)}
              page={currentPage}
              onChangePage={this.handlePaginationEvent}/>
          </Grid>
        </Grid>
      );
    }
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(List));
