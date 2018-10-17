import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { config } from '../config/config';
import MovieList from './MovieList';
import FilterList from './FilterList';
import FilterRating from './FilterRating';

// Define variables
let loaderTimeout;
const landingMovieId = config.LANDING_MOVIE_ID;
let url = `${config.BASE_URL}/movie/now_playing?&api_key=${config.KEY}&language=en-US&page=1`;
let urlGenres = `${config.BASE_URL}/genre/movie/list?&api_key=${config.KEY}&language=en-US`;

class MoviesMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			moviesData: [],
			moviesGenres: [],
			allMoviesData: [],
			loading: true
		};

		this.handleChangeFilter = this.handleChangeFilter.bind(this);
		this.handleChangeRatings = this.handleChangeRatings.bind(this);
	}

	handleChangeFilter(event) {
		const target = event.target;
		const value = target.name;
		// Convert into number to be able to compare it by type
		const id = parseInt(target.id, 10);
		let movieGenres = this.state.moviesGenres;

		movieGenres.forEach((item) => {
			if (item.id === id) {
				item.visible = !item.visible;
			}
		});

		this.setState({
			movieGenres: movieGenres
		});
	}

	handleChangeRatings(event) {
		const target = event.target;
		const value = parseInt(target.value, 10);
		// Reload all movies data
		const storedMoviesData = this.state.allMoviesData;
		let moviesData = JSON.parse(JSON.stringify(storedMoviesData));
		// Filter by vote average
		moviesData = moviesData.filter((item) => item.vote_average > value);

		this.setState({
			moviesData: moviesData
		});
	}

	setGenreVisibility(data) {
		data.forEach((item) => (item.visible = true));
		this.setState({
			movieGenres: data
		});
		return data;
	}

	// Get all movies data from API using fetch and save into state
	getMoviesData() {
		axios
			.get(url)
			.then((data) =>
				// handle success
				this.setState({
					moviesData: data.data.results,
					allMoviesData: data.data.results
				})
			)
			.catch((error) => {
				// handle error
				console.log(error);
				this.setState({ error: error });
			});
	}

	// Get all movies data from API using fetch and save into state
	getMoviesGenres() {
		let dataGenres;
		axios
			.get(urlGenres)
			// handle success
			.then((data) => {
				dataGenres = data.data.genres;
				dataGenres = this.setGenreVisibility(dataGenres);
				this.setState({
					moviesGenres: dataGenres
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ error: error });
			});
	}

	componentWillMount() {
		// Api Calls
		this.getMoviesData();
		this.getMoviesGenres();
		clearTimeout(loaderTimeout);
	}

	// Setting state of loader function
	setLoadingState() {
		this.setState({ loading: false });
	}

	// Set timeout after all elements of Component have loaded
	componentDidMount() {
		loaderTimeout = setTimeout(() => {
			this.setLoadingState();
		}, 800);
	}

	render() {
		const loading = this.state.loading;
		const error = this.state.error;

		if (loading) {
			return <Loading />;
		}
		if (error) {
			return <div>There has been some issue fetching the API data</div>;
		}
		return (
			<div className="main">
				<FilterList genres={this.state.moviesGenres} handleChangeFilter={this.handleChangeFilter} />
				<FilterRating handleChangeRatings={this.handleChangeRatings} />
				<MovieList movies={this.state.moviesData} genres={this.state.moviesGenres} />
			</div>
		);
	}
}

export default MoviesMain;