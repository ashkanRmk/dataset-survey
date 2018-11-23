import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../dist/img/logo.svg';
import '../dist/css/index.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Start extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />

					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Start Podcastify Survey
					</a>
					<Link to="/start">
						<Button>Click Me Next Page !!</Button>
					</Link>
				</header>
			</div>
		);
	}
}

export default Start;
