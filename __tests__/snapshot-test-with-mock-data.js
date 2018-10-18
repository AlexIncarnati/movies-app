import React from 'react';
import AppMain from '../app/components/AppMain';
import FilterItem from '../app/components/FilterItem';
import FilterList from '../app/components/FilterList';
import FilterRating from '../app/components/FilterRating';
import FilterRatingItem from '../app/components/FilterRating';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import MovieItem from '../app/components/MovieItem';

import { shallow } from 'enzyme';

describe('The AppMain Component', () => {
	it('should render correctly', () => {
		const component = shallow(<AppMain />);

		expect(component).toMatchSnapshot();
	});
});

describe('The FilterItem Component', () => {
	it('should render correctly', () => {
		const genre = {
			id: 28,
			name: 'Action',
			visible: true
		};
		const component = shallow(<FilterItem genre={{ genre }} />);

		expect(component).toMatchSnapshot();
	});
});

describe('The FilterList Component', () => {
	it('should render correctly', () => {
		const genres = [
			{
				id: 28,
				name: 'Action',
				visible: true
			},
			{
				id: 12,
				name: 'Adventure',
				visible: true
			},
			{
				id: 16,
				name: 'Animation',
				visible: true
			},
			{
				id: 35,
				name: 'Comedy',
				visible: true
			},
			{
				id: 80,
				name: 'Crime',
				visible: true
			},
			{
				id: 99,
				name: 'Documentary',
				visible: true
			},
			{
				id: 18,
				name: 'Drama',
				visible: true
			},
			{
				id: 10751,
				name: 'Family',
				visible: true
			},
			{
				id: 14,
				name: 'Fantasy',
				visible: true
			},
			{
				id: 36,
				name: 'History',
				visible: true
			},
			{
				id: 27,
				name: 'Horror',
				visible: true
			},
			{
				id: 10402,
				name: 'Music',
				visible: true
			},
			{
				id: 9648,
				name: 'Mystery',
				visible: true
			},
			{
				id: 10749,
				name: 'Romance',
				visible: true
			},
			{
				id: 878,
				name: 'Science Fiction',
				visible: true
			},
			{
				id: 10770,
				name: 'TV Movie',
				visible: true
			},
			{
				id: 53,
				name: 'Thriller',
				visible: true
			},
			{
				id: 10752,
				name: 'War',
				visible: true
			},
			{
				id: 37,
				name: 'Western',
				visible: true
			}
		];
		const component = shallow(<FilterList props={{ genres }} />);

		expect(component).toMatchSnapshot();
	});
});

describe('The FilterRating Component', () => {
	it('should render correctly', () => {
		const component = shallow(<FilterRating />);

		expect(component).toMatchSnapshot();
	});
});

describe('The FilterRatingItem Component', () => {
	it('should render correctly', () => {
		const component = shallow(<FilterRatingItem />);

		expect(component).toMatchSnapshot();
	});
});

describe('The Footer Component', () => {
	it('should render correctly', () => {
		const component = shallow(<Footer />);

		expect(component).toMatchSnapshot();
	});
});

describe('The Header Component', () => {
	it('should render correctly', () => {
		const component = shallow(<Header />);

		expect(component).toMatchSnapshot();
	});
});

describe('The MovieItem Component', () => {
	it('should render correctly', () => {
		const movie = {
			vote_average: 6.6,
			title: 'Venom',
			genre_ids: [ 878, 28 ],
			poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
			popularity: 432.604
		};
		const genres = [ 'Science Fiction', 'Action' ];
		const genresVisibles = [ true, true ];
		const component = shallow(<MovieItem movie={{ movie }} genres={genres} genresVisibles={genresVisibles} />);

		expect(component).toMatchSnapshot();
	});
});
