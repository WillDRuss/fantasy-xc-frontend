import React, { Component } from 'react';
import Table from './Components/Table';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            runners: [
                {givenName: 'Sam', familyName: 'Martin'},
                {givenName: 'Sam', familyName: 'Sheppard'},
                {givenName: 'Felix', familyName: 'Vaughan'}
            ]
        }
    }

    render() {
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


export default App;
