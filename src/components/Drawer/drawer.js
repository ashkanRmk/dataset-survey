import React, { Component } from 'react';
import '../../dist/css/index.css';
import 'antd/dist/antd.css';
import { Button, Drawer, Col, Row, Rate } from 'antd';
import Modal from '../Modals/modal';

class MultiDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleChildDrawer: false,
			placement: 'bottom',
			value: 0,
		};
		this.closeModal = this.closeModal.bind(this);

	}
	showChildrenDrawer = () => {
		this.setState({
			visibleChildDrawer: true,
		});
	};

	onChildrenDrawerClose = () => {
		this.setState({
			visibleChildDrawer: false,
		});
	};

	onClose = () => {
		this.props.closeDrawer();
	};

	onChange = e => {
		this.setState({
			placement: e.target.value,
		});
	};

	handleChange = value => {
		this.setState({ value });
	};

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	closeModal() {
		this.setState({
			visible: false,
		});
	}
	render() {
		const { value } = this.state;

		return (
			<div>
				<Modal visible={this.state.visible} closeModal={this.closeModal} />

				<Drawer
					title="لطفا از لیست زیر یک پادکستی که قبلا شنیدید را انتخاب کنید"
					placement={this.state.placement}
					closable={false}
					onClose={this.onClose}
					visible={this.props.visibleDrawer}>
					<div className="btn-geek">
						<Row gutter={24} type="flex" justify="left">
							<Col className="gutter-row" span={6}>
								<Button onClick={this.showChildrenDrawer}>کافه تریا</Button>
							</Col>
							<Col className="gutter-row" span={6}>
								<Button onClick={this.showChildrenDrawer}>کانال بی</Button>
							</Col>
							<Col className="gutter-row" span={6}>
								<Button onClick={this.showChildrenDrawer}>بی پلاس</Button>
							</Col>
							<Col className="gutter-row" span={6}>
								<Button onClick={this.showChildrenDrawer}>داستان شب</Button>
							</Col>
							<Col className="gutter-row" span={6}>
								<Button onClick={this.showChildrenDrawer}>داستان شب</Button>
							</Col>
							<Col className="gutter-row" span={6}>
								<Button onClick={this.showChildrenDrawer}>داستان شب</Button>
							</Col>
						</Row>
					</div>
					<Drawer
						title="به صورت کلی چه امتیازی به این پادکست می‌دهید؟"
						placement={this.state.placement}
						closable={false}
						onClose={this.onChildrenDrawerClose}
						visible={this.state.visibleChildDrawer}>
						<span>
							<Rate onChange={this.handleChange} value={value} />
							{value && <span className="ant-rate-text" > {value} </span>}
						</span>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<Button onClick={this.showModal}>ادامه</Button>
					</Drawer>
				</Drawer>
			</div>
		);
	}
}

export default MultiDrawer;
