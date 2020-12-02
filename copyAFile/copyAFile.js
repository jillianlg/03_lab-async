const fsPromises = require('fs').promises;

function copy(src, dst) {
    return fsPromises.readFile(src, 'utf-8')
    .then(data => {
        return fsPromises.writeFile(dst, data);
    })
    .catch(err => {
        log(err);
    })
}
// copy('./README.md', './copyAFile/chain-copy.txt');

module.exports = { copy };