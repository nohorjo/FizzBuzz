import React, { Component } from 'react';

export default class FizzBuzzComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            result: [],
        };
    }

    handleGenerateClick() {
        this.setState({result: [
            '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz',
        ]});
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

