import React, {Component} from 'react'
import './Content.css'
import moment from 'moment'

class Message extends Component {
	// Data
	state = {
		message: this.props.message
	}
	// Functions
	componentWillMount() {
		let message = this.state.message
		message.date = moment(message.date).format('D MMM YYYY - h:mma')
		this.setState({message})
	}
	// Render
	render() {
		return (
			<div className="message">
                    <div className="card">
                        <div className="card-header">
						<span className="author">{this.state.message.author}</span>
						<span className="date">{this.state.message.date}</span>
                        </div>
                        <div className="card-body mg">
                            <p className="card-text"><div className="body">{this.state.message.body}</div></p>
                        </div>
                    </div>
                </div>	
		)
	}
}

export default Message
