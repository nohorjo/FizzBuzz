import React from 'react';

import FizzBuzzComponent from './FizzBuzzComponent';

import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleLimitChange = this.handleLimitChange.bind(this);

        this.state = {
            limit: 100,
        };
    }

    /**
     * Updates limit
     *
     * @param {SyntheticEvent} event - the change event
     */
    handleLimitChange(event) {
        this.setState({limit: parseInt(event.target.value)});
    }

    render() {
        const { limit } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1>FizzBuzz in ReactJS!</h1>
                    <div>
                        <label>Limit</label>
                        <div>
                            <input
                                type="number"
                                value={limit}
                                onChange={this.handleLimitChange}
                            />
                        </div>
                    </div>
                    <FizzBuzzComponent numbers={Array(limit).fill(0).map((_, i) => i + 1)}/>
                </header>
            </div>
        );
    }

}
