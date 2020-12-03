const fs = require('fs');
const { funq } = require('../funq');

fs.readFile('input.txt', (err, buf) => {
    const passwords = buf.toString().split('\n').slice(0, -1).map(s => {
        const item = s.split(': ');
        const policy = item[0].split(' ');
        const range = policy[0].split('-');
        return {
            policy: {
                min: parseInt(range[0]),
                max: parseInt(range[1]),
                char: policy[1]
            },
            password: item[1]
        };
    });
    const valid = funq(passwords).where(i => {
        const count = funq(i.password).where(s => s == i.policy.char).count();
        return count >= i.policy.min && count <= i.policy.max;
    });
    console.log(valid.count());
});
