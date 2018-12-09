const fs = require('mz/fs');

fs.readFile('01/input.txt')
    .then(resp => {
        const numbers = resp.toString().split('\n').map(str => {
            return (str[0] === '+') ? parseInt(str.slice(1), 10) : parseInt(str);
        });

        const result = numbers.reduce((full, next) => full + next);

        console.log(result);
    })