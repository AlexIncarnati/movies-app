# MOVIE DB API APP

This is a simple SPA for testing out the MOVIE DB APIs.

## Running the app on your local environment

Download the zip or clone the repo then:

```
npm install
npm run start
```

## Running the tests

At the moment you can run some snapshot testing with Jest and Enzyme

```
npm run test
```

## Create a build of the app

You will find the built files inside the /dist folder.

```
npm run build
```

# DEMO

[DEMO](http://www.rightinterfaces.com/movie-db-app/) - http://www.rightinterfaces.com/movie-db-app/


## Built With

* [ReactJS](https://reactjs.org/) - The JS library used
* [Jest](https://jestjs.io/) - Javascript Testing Library
* [Enzyme](https://airbnb.io/enzyme/) - Javascript Test Utility from Airbnb

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## INTRO

* Decided not to use any boilerplate for React to show the ability of configuring the app from scratch (e.g. starting from npm init, webpack.config.js etc.)
* Designed a quick UI for it and implemented it with a responsive mobile first approach

## FEATURES

* Full filtering functionality for movies by genres and rating using the MOVIE DB API
* Display a list of movies, each showing their title, genres and poster image
* **Sorting by popularity descending** - most popular first
* **Movies are filterable by multiple genres**, the user can toggle movies depending on all of its assigned genres using exclusive sorting.
For example if 'Action' and 'Drama' genres are selected listed movies must have both 'Action' and 'Drama' genres otherwise it won't show those movies.
* Added **Toggle All and Reset All functionality** for filters genres
* Movies are **filterable by rating**, the user can set the value of the minimum rating of movies to display and filter accordingly.
* **Movie details** overlay added

## IMPLEMENTATION DETAILS

* Data fetching is done by calling the input API's only once.
* Implemented **Error handling** on both API calls with catch() and in the views too
* Implemented component **Snapshot Unit Testing** with mock data taken from API responses done with Jest and Enzyme.
* Added async simulation on load with a Loader Component
* Added **SVG CSS animation on Loader**
* Used original SVG from Movie DB and filled in white color
* Added placeholder image in case no poster_path is returned by the API and used it as fallback image
* **Fully responsive**, supports well all devices with media queries, mobile first approach using flexbox
* Added SASS and divided styles in SASS modules
* Added ESLINT, PRETTIER, and lots of code linting settings - cleaner code ES6




