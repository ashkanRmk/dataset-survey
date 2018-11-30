import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../dist/css/index.css';
import 'antd/dist/antd.css';
import { Button, Modal, Icon } from 'antd';
import Cards from '../Cards/card.js';

class Survey extends Component {
	state = {
		loading: false,
		visible: false,
		redirect: false,
	};

	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, redirect: true, visible: false });
		}, 3000);
	};

	handleCancel() {
		this.setState({ visible: false });
	}

	render() {
		const { loading } = this.state;

		return (
			<div className="App">
				<Cards />

				<br />
				<Button
					onClick={() => {
						this.setState({ visible: true });
					}}
					type="primary"
					size="large"
					style={{
						color: '#2f54eb',
						background: '#f0f5ff',
						borderColor: '#adc6ff',
					}}>
					<Icon type="select" />
					ارسال نهایی
				</Button>

				<br />
				<br />

				<Link to="/">
					<Button type="primary">
						<Icon type="double-left" />
					</Button>
				</Link>

				<Modal
					visible={this.state.visible}
					title="کاملا مطمئنی؟"
					onOk={this.handleOk}
					onCancel={this.handleCancel.bind(this)}
					footer={[
						<Button key="back" onClick={this.handleCancel.bind(this)}>
							تکمیل امتیازها
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
							ارسال نهایی
						</Button>,
					]}>
					<p>تمام پادکست‌ها رو امتیاز دادی؟</p>
				</Modal>
				{this.state.redirect && <Redirect to="/thanks" />}
			</div>
		);
	}
}

export default Survey;
