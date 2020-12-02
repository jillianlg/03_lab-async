//promise chain READ file
// const fsPromises = require('fs').promises;

// fsPromises.readFile('./README.md', 'utf-8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         log(err);
//     })

//promise chain WRITE file
// const fsPromises = require('fs').promises;

// fsPromises.writeFile('./chain-write.text', 'testing write file with a promise chain')
//     .then(() => console.log('DONE'))
//     .catch(err => console.log(err));



//async/await READ file
// const fsPromises = require('fs').promises;

// async function read() {
//     try {
//         const data = await fsPromises.readFile('./README.md', 'utf-8')
//         console.log(data);
//     } catch(err) {
//         console.log(err);
//     }
// }

// read();

//async/await WRITE file
// const fsPromises = require('fs').promises;

// async function write() {
//     try {
//         await fsPromises.writeFile('./async-write.text', 'testing write file with async')
//         console.log('DONE');
//     } catch(err) {
//         console.log(err);
//     }
// } 
// write();

//Promise Chain COPY file
// const fsPromises = require('fs').promises;

// async function copy(src, destination) {
//     fsPromises.readFile(src, 'utf-8')
//     .then(data => {
//         fsPromises.writeFile(destination, data);
//     })
//     .catch(err => {
//         log(err);
//     })
// }
// copy('./README.md', './chain-copy.txt');


