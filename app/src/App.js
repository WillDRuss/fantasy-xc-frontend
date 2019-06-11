import React, { Component } from 'react';
import Table from './Components/Table';
import './App.css';
const url = 'http://localhost:3001/runners'
// const url = 'https://surreyleague.org/match/95/json/'

class App extends Component {
    constructor() {
        super()
        this.state = {
            runners: []
        }
    }

    componentDidMount() {
        fetch(url)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(result => {
                console.log(result)
                return this.setState({ 
                    runners: result.runners
                })
            })
    }

    render() {
        if (this.state.runners.length === 0) {
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
