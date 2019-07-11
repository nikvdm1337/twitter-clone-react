import React, {Component} from 'react'


class Home extends Component {
// Function
home = (e) => {
    window.location.reload()
}

    render() {
        return (
            <form onSubmit={(e) => this.home(e)}>
            <button type="submit" className="btn btn-success">Home</button>
            </form>
        )
    }
}

export default Home