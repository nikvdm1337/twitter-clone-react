import React, {Component} from 'react'

class Channel extends Component {
	// Data
	
	// Functions
	componentWillMount() {
		console.log(this.props)
	}

	// Render
	render() {
		return (
			<li onClick={() => this.props.setChannel(this.props.channelID)}># {this.props.channel.name}</li>
		)
	}
}

export default Channel
