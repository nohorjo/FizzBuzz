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
