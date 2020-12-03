const { transform } = require('./transformer');
const fsPromises = require('fs').promises;

describe('transform fn', () => {
    it('reads the src file, removes all uppercase letters, converts all letters to uppercase and reverses the string', async() => {
    const contents = await transform('./transformer/transform-text.txt');
    
        expect(contents).toEqual('.SRAEB IMMUG EKACPU DAERBREGNI')
    });
});