const { getCharacterRefactor } = require('./getCharacterRefactor');

describe('getCharacterRefactor fn', () => {
    it('takes an id and returns a promise that resolves to a character\'s name, status and species', async () => {
        const response = await getCharacterRefactor(1);
        expect(response).toEqual('Name: Rick Sanchez, Status: Alive, Species: Human')
    });
});