import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Jumbotron from './Jumbotron'

class App extends Component {
	// Data
	state = {
		channel: ''
	}
	// Functions
	getMessages = (id) => {
		this.setState({
			channel: id
		})
	}
	// Render
	render() {
		return (
			<div id="megawrap">
				<Jumbotron />
				<div id="wrap" className="row">
					<Sidebar getMessages={this.getMessages} />
					<Content channel={this.state.channel} />
			</div>
		</div>
		)
	}
}

export default App
