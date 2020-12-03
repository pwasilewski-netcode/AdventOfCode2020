const fs = require('fs');

fs.readFile('input.txt', (err, buf) => {
    const numbers = buf.toString().split('\n').map(s => parseInt(s));
    for (let i = 0; i < numbers.length - 2; i++) {
        for (let j = i + 1; j < numbers.length - 1; j++) {
            for (let k = j + 1; k < numbers.length; k++) {
                const a = numbers[i];
                const b = numbers[j];
                const c = numbers[k];
                if (a + b + c == 2020) {
                    console.log(a, b, c, a * b * c);
                    break;
                }
            }
        }
    }
});
