/**
 * @typedef Terms
 * @type Array
 * @property {string} 0 - the term used for replacement
 * @property {number} 1 - the multiple
 */

/**
 * Function to generate FizzBuzz results
 *
 * @param {Array.<Term>} [opts.terms=[['Fizz', 3], ['Buzz', 5]]] - terms to use
 * @param {Array.<number>} [opts.numbers={1 - 100}] - number list
 *
 * @returns {Arrar.<string>} - the results of the generation
 */
export default function({
    terms = [
        ['Fizz', 3],
        ['Buzz', 5],
    ],
    numbers = Array(100).fill(0).map((_, i) => i + 1),
} = {}) {
    return numbers.map(i => {
        let string = '';
        
        terms.forEach(([term, modder]) => {
            if (!(i % modder))
                string += term;
        });

        if (!string)
            string = String(i);

        return string;
    });
}
