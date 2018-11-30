import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../dist/img/logo.svg';
import '../dist/css/index.css';
import 'antd/dist/antd.css';
import { Button, Icon, Divider, Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Start extends Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />

					<div style={{ direction: 'rtl', textAlign: 'center', padding: '20px' }}>
						<p style={{ direction: 'rtl' }}>
							ما اینجا سعی داریم تا اطلاعات لازم برای تگ‌بندی و آموزش یک سیستم پیشنهاددهنده برای پادکست‌های فارسی
							جمع‌اوری کنیم. خوشحال میشیم تا یکم از وقتتون رو به ما بدین و این فرم رو تکمیل کنین. پیشاپیش ممنونیم ازتون
							:)
						</p>
						{/* <Divider /> */}
						<p>
							برای مشاهده یک لیست کاملی از پادکست‌های فارسی هم میتونین به
							<a
								className="App-link"
								href="https://ashkan-rmk.github.io/awesome-persian-podcasts/"
								target="_blank"
								rel="noopener noreferrer">
								اینجا
							</a>
							یک سری بزنین
						</p>
						<p>لطفا یکی رو انتخاب کنین</p>

						<RadioGroup defaultValue="man" size="large">
							<RadioButton value="man">
								{' '}
								<Icon type="man" />
								آقا
							</RadioButton>
							<RadioButton value="woman">
								{' '}
								<Icon type="woman" />
								خانم
							</RadioButton>
						</RadioGroup>

						<Divider dashed />
						<Link to="/start">
							<Button size="large" type="primary">
								شروع
								<Icon type="fire" />
							</Button>
						</Link>
					</div>
				</header>
			</div>
		);
	}
}

export default Start;
