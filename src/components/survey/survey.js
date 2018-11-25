import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../dist/css/index.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import Cards from '../Cards/card.js';

class Survey extends Component {
	render() {
		return (
			<div className="App">

				<Cards />

				<br />
				<Link to="/">
					<Button type="primary">صفحه قبل !!</Button>
				</Link>
			</div>
		);
	}
}

export default Survey;
