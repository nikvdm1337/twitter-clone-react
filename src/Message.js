import React, {Component} from 'react'
import './Content.css'
import './Message.css'
import moment from 'moment'

class Message extends Component {
	// Data
	
	// Functions
	
	// Render
	render() {
		return (
			<div className="message">
                    <div className="card">
                        <div className="card-header">
						<span className="author">@{this.props.message.author.name}</span>	
						<span className="date">{moment(this.props.message.date).format('D MMM YY hh:m A')}</span>
                        </div>
                        <div className="card-body mg">
                            <div className="card-text"><div className="body">{this.props.message.body} <span className="hashtag" onClick={() => this.props.setChannel(this.props.channel._id)}>#{this.props.message.channel.name}</span></div></div>
                        </div>
                    </div>
                </div>	
		)
	}
}

export default Message
