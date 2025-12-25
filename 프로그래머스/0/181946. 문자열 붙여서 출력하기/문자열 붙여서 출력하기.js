const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const arr = line.split(' ');
    console.log(arr.join(''))
})