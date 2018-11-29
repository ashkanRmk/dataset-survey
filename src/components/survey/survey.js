import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../dist/css/index.css';
import 'antd/dist/antd.css';
import { Button, Modal, notification, Icon } from 'antd';
import Cards from '../Cards/card.js';

class Survey extends Component {
	state = {
		loading: false,
		visible: false,
	};

	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false });
			this.handleCancel();
			this.notif('فرم با موفقیت ارسال شد');
		}, 3000);
	};

	handleCancel() {
		this.setState({ visible: false });
	}

	notif(type) {
		notification.open({
			message: type,
			// description: 'فرم با موفقیت ارسال شد',
			icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
		});
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
					type="primary">
					ارسال نهایی
				</Button>

				<br />
				<br />

				<Link to="/">
					<Button type="primary">صفحه قبل !!</Button>
				</Link>

				<Modal
					visible={this.state.visible}
					title="آیا مطمئن هستید؟"
					onOk={this.handleOk}
					onCancel={this.handleCancel.bind(this)}
					footer={[
						<Button key="back" onClick={this.handleCancel.bind(this)}>
							بازگشت
						</Button>,
						<Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
							ارسال نهایی!
						</Button>,
					]}
				/>
			</div>
		);
	}
}

export default Survey;
