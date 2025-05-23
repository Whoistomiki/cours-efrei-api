import { Pow } from './pow.js';

describe('test pow function', () => { 

    test('2 exponent 2 should be 4', () => {
        expect(Pow(2, 2)).toBe(4);
    });
})