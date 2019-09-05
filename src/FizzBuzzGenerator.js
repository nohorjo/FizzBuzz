/**
 * @typedef Terms
 * @type Array
 * @property {string} 0 - the term used for replacement
 * @property {number} 1 - the multiple
 */

/**
 * Function to generate FizzBuzz results
 *
 * @param {number} [opts.limit=100] - number of terms to calculate
 * @param {Array.<Term>} [opts.terms=[['Fizz', 3], ['Buzz', 5]]] - terms to use
 *
 * @returns {Arrar.<string>} - the results of the generation
 */
export default function({
    limit = 100,
    terms = [
        ['Fizz', 3],
        ['Buzz', 5],
    ],
} = {}) {
    const results = [];

    for (let i = 1; i <= limit; i++) {
        let string = '';
        
        terms.forEach(([term, modder]) => {
            if (!(i % modder))
                string += term;
        });

        if (!string)
            string = String(i);

        results.push(string);
    }

    return results;
}
