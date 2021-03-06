const fetch = require('node-fetch');

// async function fetcher() {
//     const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
//     const json = await res.json();
//     console.log(json);
// }

const fetcherOne = () => {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
        .then(res => {
        return res.json()
    })
        .then(json => {
        console.log(json);
    });
}

fetcherOne();

const fetcherMore = () => {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/')
        .then(res => {
        return res.json()
    })
        .then(json => {
        console.log(json);
    });
}

fetcherMore();

const fetcherBender = () => {
    return fetch('http://futuramaapi.herokuapp.com/api/characters/bender')
        .then(res => {
        return res.json()
    })
        .then(json => {
        console.log(json);
    });
}

fetcherBender();


