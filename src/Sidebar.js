import React, {Component} from 'react'
import './Sidebar.css'
import Channel from './Channel'
import axios from 'axios'

class Sidebar extends Component {
	// Data
	state = {
		channels: []
	}
	// Lifecycle
	componentDidMount() {
		axios.get(`http://localhost:2000/api/channels`).then((res) => {
			console.log(res.data)
			this.setState({
				channels: res.data
			})	
			
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Functions
	selectChannel = (id) => {

		this.props.getMessages(id)
	}

	// Render
	render() {
		return (
			<div id="sidebar" className="col-3">
				<h3>Trends for you</h3>
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
