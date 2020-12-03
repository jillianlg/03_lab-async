const fetch = require('node-fetch');

// async function fetcher() {
//     const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
//     const json = await res.json();
//     console.log(json);
// }

const fetcher = () => {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
        .then(res => {
        return res.json()
    })
        .then(json => {
        console.log(json);
    });
}

fetcher();
