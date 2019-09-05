import React, { Component } from 'react';

import generateFizzBuzzList from './FizzBuzzGenerator';

export default class FizzBuzzComponent extends Component {
    
    constructor(props) {
        super(props);

        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleAddTerm = this.handleAddTerm.bind(this);

        this.state = {
            result: [],
            limit: 100,
            terms: [
                ['Fizz', 3],
                ['Buzz', 5]
            ],
            newTerm: '',
            newModder: '',
        };
    }

    handleGenerateClick() {
        const { limit, terms } = this.state;

        this.setState({result: generateFizzBuzzList({limit, terms})});
    }

    handleLimitChange(event) {
        this.setState({limit: parseInt(event.target.value)});
    }

    handleTermOptionChange(index, value, isTerm) {
        const { terms } = this.state;
        terms[index][isTerm ? 0 : 1] = value;
        this.setState({terms});
    }

    handleNewTermChange(value, isTerm) {
        let {
            newTerm,
            newModder,
        } = this.state;

        if (isTerm) {
            newTerm = value;
        } else {
            newModder = parseInt(value);
        }

        this.setState({
            newTerm,
            newModder,
        });
    }

    handleAddTerm() {
        const {
            terms,
            newTerm,
            newModder,
        } = this.state;

        if (newTerm && newModder) {
            terms.push([newTerm, newModder]);
            this.setState({
                terms,
                newTerm: '',
                newModder: '',
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <label>Limit</label>
                    <div>
                        <input
                            type="number"
                            value={this.state.limit}
                            onChange={this.handleLimitChange}
                        />
                    </div>
                </div>
                <label>Terms</label>
                {this.state.terms.map(([term, modder], i) => (
                    <div key={`term${i}`}>
                        <input
                            type="text"
                            value={term}
                            onChange={event => this.handleTermOptionChange(i, event.target.value, true)}
                        />
                        <input
                            type="number"
                            value={modder}
                            onChange={event => this.handleTermOptionChange(i, event.target.value, false)}
                        />
                    </div>
                ))}
                <label>New term</label>
                <div>
                    <input
                        type="text"
                        value={this.state.newTerm}
                        onChange={event => this.handleNewTermChange(event.target.value, true)}
                    />
                    <input
                        type="number"
                        value={this.state.newModder || ''}
                        onChange={event => this.handleNewTermChange(event.target.value, false)}
                    />
                    <div>
                        <input
                            type="button"
                            value="Add term"
                            onClick={this.handleAddTerm}
                        />
                    </div>
                </div>
                <input
                    type="button"
                    value="Generate!"
                    onClick={() => this.handleGenerateClick()}
                />
                <ol>
                    {this.state.result.map((v, i) => (
                        <li key={`result${i}`}>{v}</li>
                    ))}
                </ol>
            </div>
        );
    }

}

