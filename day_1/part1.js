const fs = require('fs');

fs.readFile('input.txt', (err, buf) => {
    const numbers = buf.toString().split('\n').map(s => parseInt(s));
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const a = numbers[i];
            const b = numbers[j];
            if (a + b == 2020) {
                console.log(a, b, a * b);
                break;
            }
        }
    }
});
