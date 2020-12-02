const { copy } = require('./copyAFile');
const fsPromises = require('fs').promises

describe('copy fn', () => {
    afterEach(() => {
        return fsPromises.rm('./copyAFile/chain-copy.txt')
    });
    
    it('reads the data from the original source and copies the data into a new file', async() => {
        await copy('./README.md', './copyAFile/chain-copy.txt');
        const contents = await fsPromises.readFile('./README.md', 'utf-8')
        expect(contents).toEqual('This is the README file')
    });
});