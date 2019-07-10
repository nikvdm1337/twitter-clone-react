import React, {Component} from 'react'
import './Sidebar.css'
import Channel from './Channel'
import axios from 'axios'

class Sidebar extends Component {
	// Data
	state = {
		workspace: 'Tortuga Twitter',
		channels: []
	}
	// Lifecycle
	componentDidMount() {
		axios.get(`http://localhost:2000/api/channels`).then((res) => {
			console.log(res.data)
			res.data[0].active = true
			this.setState({
				channels: res.data
			})
			this.selectChannel(res.data[0]._id)
			console.log('res.data[0]', res.data[0])
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Functions
	selectChannel = (id) => {
		let channels = this.state.channels
		channels.forEach((c) => delete c.active)
		let channel = channels.find((c) => c._id === id)
		channel.active = true
		this.setState({channels})
		this.props.getMessages(id)
	}

	// Render
	render() {
		return (
			<div id="sidebar" className="col-3">
				<h2>{this.state.workspace}</h2>
				<h3>Hashtags</h3>
				<ul className="list-unstyled">
					{
						this.state.channels.map((c) => {
							return <Channel channel={c} key={c._id} selectChannel={this.selectChannel} />
						})
					}
				</ul>
			</div>
			
		)
	}
}

export default Sidebar
