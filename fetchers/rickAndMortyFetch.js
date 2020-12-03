const fetch = require('node-fetch');

const fetcher = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(res => {
        return res.json()
    })
        .then(json => {
        console.log(json);
    });
}
fetcher();