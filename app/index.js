import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './components/AppMain';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<AppMain />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
