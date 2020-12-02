const fsPromises = require('fs').promises;

async function copy(src, dst) {
    fsPromises.readFile(src, 'utf-8')
    .then(data => {
        fsPromises.writeFile(dst, data);
    })
    .catch(err => {
        log(err);
    })
}
copy('./README.md', './copyAFile/chain-copy.txt');