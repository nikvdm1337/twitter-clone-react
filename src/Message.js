import React, {Component} from 'react'
import './Content.css'
import './Message.css'
import moment from 'moment'

class Message extends Component {
	// Data
	state = {
		message: this.props.message,
		channel: this.props.channel
	}
	// Functions
	componentWillMount() {
		let message = this.state.message
		message.date = moment(message.date).format('D MMM YY hh:m A')
		this.setState({message})
	}
	// Render
	render() {
		return (
			<div className="message">
                    <div className="card">
                        <div className="card-header">
						<span className="author">@{this.state.message.author.name}</span>	
						<span className="date">{this.state.message.date}</span>
                        </div>
                        <div className="card-body mg">
                            <div className="card-text"><div className="body">{this.state.message.body} <span className="hashtag" onClick={() => this.props.channel(this.state.channel._id)}>#{this.state.message.channel.name}</span></div></div>
                        </div>
                    </div>
                </div>	
		)
	}
}

export default Message
