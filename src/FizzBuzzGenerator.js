export default function({
    limit = 100,
} = {}) {
    const results = [];

    for (let i = 1; i <= limit; i++) {
        if (!(i % 15)) {
            results.push('FizzBuzz');
        } else {
            if (!(i % 3)) {
                results.push('Fizz');
            } else if (!(i % 5)) {
                results.push('Buzz');
            } else {
                results.push(String(i));
            }
        }
    }

    return results;
}
