import React, { Component } from 'react';

import generateFizzBuzzList from './FizzBuzzGenerator';

export default class FizzBuzzComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            result: [],
        };
    }

    handleGenerateClick() {
        this.setState({result: generateFizzBuzzList()});
    }

    render() {
        return (
            <div>
                <input
                    type="button"
                    value="Generate!"
                    onClick={() => this.handleGenerateClick()}
                />
                <ol>
                    {this.state.result.map(v => (
                        <li>{v}</li>
                    ))}
                </ol>
            </div>
        );
    }

}

