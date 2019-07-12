import React, {Component} from 'react'
import './Content.css'
import Message from './Message'
import NewMessage from './NewMessage'
import axios from 'axios'

class Content extends Component {
	// Data
	constructor() {
		super();
		this.state = {
			messages:[],
		};
	}
	
	// Functions

	selectChannel = () => {
		axios.get(`${process.env.REACT_APP_API}/api/messages`).then((res) => {
			console.log('res.data', res.data)
			this.setState({
				messages: res.data,
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API}/api/messages`).then((res) => {
			console.log('res.data', res.data)
			this.setState({
				messages: res.data,
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	componentWillReceiveProps() {
		axios.get(`${process.env.REACT_APP_API}/api/messages?channel=${this.props.channel}`).then((res) => {
			this.setState({
				messages: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	createMessage = (e, text) => {
		e.preventDefault()
		let message = {
			body: text,
			channel: this.props.channel
		}
		axios.post(
			`${process.env.REACT_APP_API}/api/messages`,
			message,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			let messages = this.state.messages
			messages.unshift(res.data)
			this.setState({messages})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	selectChannel = (id) => {
		this.props.getMessages(id)
	}

	// Render
	render() {
		console.log('channel content', this.props.channel)
		return (
			<div id="content" className="col-6">
			<NewMessage createMessage={this.createMessage} />
				<div id="messages">
					{
						this.state.messages.map((m) => {
							return <Message message={m} key={m._id} setChannel={this.props.setChannel} channel={this.props.channel} />
						})
					}
				</div>
			</div>
		)
	}
}

export default Content
