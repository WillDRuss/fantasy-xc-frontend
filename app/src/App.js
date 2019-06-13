import React, { Component } from 'react';
import Table from './Components/Table';
import './App.css';
const url = 'http://localhost:3001/runners'

class App extends Component {
    constructor() {
        super()
        this.state = {
            runners: []
        }
    }

    componentDidMount() {

        fetch(url)
        .then(response => response.json())
        .then(result => this.setState({ runners: result.runners }))    
        .catch(err => this.setState({runners: 'error' }))   
    }

    render() {
        if (this.state.runners === 'error') {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1>Error loading data. Please try again later.</h1>        
                    </header>
                </div>
            )
        }
        else if (this.state.runners.length === 0) {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1>Loading...</h1>        
                    </header>
                </div>
            )
        } else {
            console.log(this.state.runners);
            return (
                <div className="App">
                    <header className="App-header">
                        <h1>Fantasy XC League</h1>        
                    </header>
                    <div className="content-block">
                        <Table runners={this.state.runners} />
                    </div>
                </div>
            );
        }
       
    }
}


export default App;
