import React, { Component } from 'react'
import { Footer } from './presentation/index'
import Search from './containers/Search'
import Results from './containers/Results'
import Nav from './containers/Nav'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar" data-background-color="white" data-active-color="danger">
                        <Search />
                    </div>
                    <div className="main-panel">
                        <Nav />
                        <div className="content">
                            <Results />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home