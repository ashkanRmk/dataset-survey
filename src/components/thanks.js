import React, { Component } from 'react';
import '../dist/css/index.css';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

class Thanks extends Component {
	render() {
		return (
			<div className="Result">
				<h1>نظر شما با موفقیت ثبت شد!</h1>
				<p>ممنون از وقتی که گذاشتی :)</p>
                <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{ fontSize: '50px' }} />
			</div>
		);
	}
}

export default Thanks;
