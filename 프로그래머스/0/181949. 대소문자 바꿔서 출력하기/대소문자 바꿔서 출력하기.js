const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close',function(){
    var answer = ''
    
    input.forEach((e) => {
        if (e === e.toUpperCase()) {
            answer += e.toLowerCase()
        } else {
            answer += e.toUpperCase()
        }
    })
    
    console.log(answer);
});