const fetch = require('node-fetch');

const getCharacterRefactor = async (id) => {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const json = await res.json();
        const response = `Name: ${json.name}, Status: ${json.status}, Species: ${json.species}`;
        return response;
    } catch (err) {
        console.log("Error: ", err);
    }
};

module.exports = { getCharacterRefactor };
