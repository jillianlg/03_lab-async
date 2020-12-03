const fsPromises = require('fs').promises;

const transform = (src) => {
    return fsPromises.readFile(src, 'utf-8')
    .then (data => {
        return data
        .split('')
        .filter(item => item === item.toLowerCase())
        .map(item => item.toUpperCase())
        .reverse()
        .join('')

    })
    
};
// transform('./transformer/transform-text.txt')
// .then(result => console.log(result))


module.exports = { transform };

