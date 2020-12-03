const fetch = require('node-fetch');
const { getCharacter } = require('./getCharacter')

const getManyCharacters = async (ids) => {
    const promiseArray = ids.map(characterId => {
        return getCharacter(characterId)
    });
    return await Promise.all(promiseArray);
};

module.exports = { getManyCharacters };