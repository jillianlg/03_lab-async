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

// This isn't working and I don't know why
// const fetch = require('node-fetch');
//     const rickAndMorty = () => {
//         return Promise.all([
//             fetch('https://rickandmortyapi.com/api/character/'),
//             fetch('https://rickandmortyapi.com/api/character/origin')
//         ])
//             .then(([resCharacter, resOrigin]) => {
//                 console.log(resCharacter, resOrigin);
//             });
//     }
//     rickAndMorty();



