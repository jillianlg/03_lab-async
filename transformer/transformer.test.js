const { transform } = require('./transformer');

describe('transformer fn', () => {
    it('reads the src file, removes all uppercase letters, converts all letters to uppercase and reverses the string', () => {
        transform('Gingerbread Cupcake gummi bears.', './transform-text.txt')
    });
});