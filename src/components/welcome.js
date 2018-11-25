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

					<a className="App-link" href="https://ashkan-rmk.github.io/awesome-persian-podcasts/" target="_blank" rel="noopener noreferrer">
						به فرم نظرسنجی پادکست‌های ایرانی خوش آمدید
					</a>
					<Link to="/start">
						<Button>شروع !!</Button>
					</Link>
				</header>
			</div>
		);
	}
}

export default Start;
