const fetch = require('node-fetch');
const { getCharacter } = require('./getCharacter')

const getManyCharacters = (ids) => {
    const promiseArray = ids.map(characterId => {
        return getCharacter(characterId)
    });
    return Promise.all(promiseArray);
};

module.exports = { getManyCharacters };