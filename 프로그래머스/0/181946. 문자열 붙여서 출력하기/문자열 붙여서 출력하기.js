const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    [a, b] = line.split(' ');
    console.log(`${a}${b}`)
})