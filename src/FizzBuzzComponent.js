import React, { Component } from 'react';

import generateFizzBuzzList from './FizzBuzzGenerator';

export default class FizzBuzzComponent extends Component {

    static defaultProps = {
        numbers: Array(100).fill(0).map((_, i) => i + 1),
    };
    
    constructor(props) {
        super(props);

        this.handleAddTerm = this.handleAddTerm.bind(this);

        this.state = {
            result: [],
            terms: [
                ['Fizz', 3],
                ['Buzz', 5]
            ],
            newTerm: '',
            newModder: '',
        };
    }

    /**
     * Generates sequence and sets it in state
     */
    handleGenerateClick() {
        this.setState({result: generateFizzBuzzList({
            terms: this.state.terms,
            numbers: this.props.numbers,
        })});
    }

    /**
     * Sets changes to term inputs
     *
     * @param {number} index - the index of the term
     * @param {string|number} value - the value to set
     * @param {boolean} isTerm - set to true for setting term value, else for modder value
     */
    handleTermOptionChange(index, value, isTerm) {
        const { terms } = this.state;
        terms[index][isTerm ? 0 : 1] = value;
        this.setState({terms});
    }

    /**
     * Sets values for new term
     *
     * @param {string|number} value - the value to set
     * @param {boolean} isTerm - set to true for setting term value, else for modder value
     */
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

    /**
     * Adds term to list
     */
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

    /**
     * Removes term from list
     *
     * @param {number} index - the index to delete
     */
    handleRemoveTerm(index) {
        const { terms } = this.state;
        terms.splice(index, 1);
        this.setState({terms});
    }

    render() {
        return (
            <div>
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
                        <input
                            type="button"
                            value="&times;"
                            onClick={() => this.handleRemoveTerm(i)}
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

