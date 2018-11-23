import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../dist/css/index.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Survey extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Link to="/">
						<Button>Previuse Page !!</Button>
					</Link>
				</header>
			</div>
		);
	}
}

export default Survey;
