import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { config } from '../config/config';
import Header from './Header';
import MovieList from './MovieList';
import Filters from './Filters';
import Footer from './Footer';

// Define variables
let loaderTimeout;
const key = config.KEY;
const baseUrl = config.BASE_URL;
const url = `${baseUrl}/movie/now_playing?&api_key=${key}&language=en-US&page=1`;
const urlGenres = `${baseUrl}/genre/movie/list?&api_key=${key}&language=en-US`;

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesData: [],
      moviesGenres: [],
      storedMoviesData: [],
      loading: true,
      error: {},
    };

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeRatings = this.handleChangeRatings.bind(this);
    this.toggleAllGenreFilters = this.toggleAllGenreFilters.bind(this);
    this.resetAllGenreFilters = this.resetAllGenreFilters.bind(this);
  }

  componentWillMount() {
    // Api Calls
    this.getMoviesData();
    this.getMoviesGenres();
    // Clear Loader timeout
    clearTimeout(loaderTimeout);
  }

  // Set timeout after all elements of Component have loaded
  componentDidMount() {
    loaderTimeout = setTimeout(() => {
      this.setLoadingState();
    }, 6000);
  }

  // Adds a property visible to each item of the genres data
  setGenreVisibility(data) {
    data.forEach(item => {
      const genre = item;
      genre.visible = true;
    });
    this.setState({
      moviesGenres: data,
    });
    return data;
  }

  // Setting state of loader component
  setLoadingState() {
    this.setState({ loading: false });
  }

  // Get all movies data from API using fetch and save into state
  getMoviesGenres() {
    let dataGenres;
    axios
      .get(urlGenres)
      // handle success
      .then(data => {
        dataGenres = data.data.genres;
        dataGenres = this.setGenreVisibility(dataGenres);
        this.setState({
          moviesGenres: dataGenres,
        });
      })
      // handle error
      .catch(error => {
        this.setState({ error });
      });
  }

  // Get all movies data from API using fetch and save into state
  getMoviesData() {
    axios
      .get(url)
      .then(data =>
        this.setState({
          moviesData: data.data.results,
          storedMoviesData: data.data.results,
        })
      )
      // handle error
      .catch(error => {
        this.setState({ error });
      });
  }

  resetAllGenreFilters() {
    const { moviesGenres } = this.state;

    moviesGenres.forEach(item => {
      const genre = item;
      genre.visible = true;
    });

    this.setState({
      moviesGenres,
    });
  }

  toggleAllGenreFilters() {
    const { moviesGenres } = this.state;

    moviesGenres.forEach(item => {
      const genre = item;
      genre.visible = !genre.visible;
    });

    this.setState({
      moviesGenres,
    });
  }

  handleChangeFilter(event) {
    const { target } = event;
    // Convert into number to be able to compare it by type
    const id = parseFloat(target.id);
    // Reload all movies data
    const { moviesGenres } = this.state;

    moviesGenres.forEach(item => {
      if (item.id === id) {
        item.visible = !item.visible;
      }
    });

    this.setState({
      moviesGenres,
    });
  }

  handleChangeRatings(event) {
    const { target } = event;
    const value = parseFloat(target.value);
    // Reload all movies data
    const { storedMoviesData } = this.state;
    let moviesData = JSON.parse(JSON.stringify(storedMoviesData));
    // Filter by vote average
    moviesData = moviesData.filter(item => item.vote_average >= value);

    this.setState({
      moviesData,
    });
  }

  render() {
    const { loading, moviesGenres, moviesData } = this.state;
    let { error } = this.state;
    error = error.toString();
    if (loading) {
      return <Loading />;
    }
    if (error !== '[object Object]') {
      return (
        <div className="main">
          <Header />
          <div className="error">
            <h3 className="no-results">There has been some issue fetching the API data</h3>
            <p className="no-results">{error.toString()}</p>
          </div>
        </div>
      );
    }
    if (!moviesData) {
      return (
        <div className="main">
          <Header />
          <Filters
            genres={moviesGenres}
            handleChangeFilter={this.handleChangeFilter}
            toggleAllGenreFilters={this.toggleAllGenreFilters}
            resetAllGenreFilters={this.resetAllGenreFilters}
            handleChangeRatings={this.handleChangeRatings}
          />

          <h3 className="no-results">No movie found matching your criteria.</h3>
        </div>
      );
    }
    return (
      <div className="main">
        <Header />
        <Filters
          genres={moviesGenres}
          handleChangeFilter={this.handleChangeFilter}
          toggleAllGenreFilters={this.toggleAllGenreFilters}
          resetAllGenreFilters={this.resetAllGenreFilters}
          handleChangeRatings={this.handleChangeRatings}
        />
        <MovieList movies={moviesData} genres={moviesGenres} />
        <Footer />
      </div>
    );
  }
}

export default Movies;
