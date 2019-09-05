import generateFizzBuzzList from './FizzBuzzGenerator';

const FIZZBUZZ_TO_100 = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz", "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz", "31", "32", "Fizz", "34", "Buzz", "Fizz", "37", "38", "Fizz", "Buzz", "41", "Fizz", "43", "44", "FizzBuzz", "46", "47", "Fizz", "49", "Buzz", "Fizz", "52", "53", "Fizz", "Buzz", "56", "Fizz", "58", "59", "FizzBuzz", "61", "62", "Fizz", "64", "Buzz", "Fizz", "67", "68", "Fizz", "Buzz", "71", "Fizz", "73", "74", "FizzBuzz", "76", "77", "Fizz", "79", "Buzz", "Fizz", "82", "83", "Fizz", "Buzz", "86", "Fizz", "88", "89", "FizzBuzz", "91", "92", "Fizz", "94", "Buzz", "Fizz", "97", "98", "Fizz", "Buzz"];

describe('FizzBuzzGenerator', () => {
    it('generates with default params', () => {
        expect(generateFizzBuzzList()).toEqual(FIZZBUZZ_TO_100);
    });

    it('generates list up to limit', () => {
        const limit = 15;
        expect(generateFizzBuzzList({limit})).toEqual(FIZZBUZZ_TO_100.slice(0, limit));
    });

    it('generates with custom terms', () => {
        const expected = FIZZBUZZ_TO_100.map(v => {
            switch (v) {
                case 'FizzBuzz':
                    return 'FooBar';
                case 'Fizz':
                    return 'Foo';
                case 'Buzz':
                    return 'Bar';
            }

            return v;
        });

        expect(generateFizzBuzzList({
            terms: [
                ['Foo', 3],
                ['Bar', 5],
            ],
        })).toEqual(expected);
    });

    it('generates with custom modders', () => {
        const expected = [
            '1', 'Foo', '3', 'FooBar', '5', 'Foo', '7', 'FooBar', '9', 'Foo'
        ];

        expect(generateFizzBuzzList({
            limit: 10,
            terms: [
                ['Foo', 2],
                ['Bar', 4],
            ],
        })).toEqual(expected);
    });
});
