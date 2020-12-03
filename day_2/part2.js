const fs = require('fs');
const { funq } = require('../funq');

fs.readFile('input.txt', (err, buf) => {
    const passwords = buf.toString().split('\n').slice(0, -1).map(s => {
        const item = s.split(': ');
        const policy = item[0].split(' ');
        const range = policy[0].split('-');
        return {
            policy: {
                pos: range.map(i => parseInt(i) - 1),
                char: policy[1]
            },
            password: item[1]
        };
    });
    const valid = funq(passwords).where(i =>
        i.password[i.policy.pos[0]] == i.policy.char ^ i.password[i.policy.pos[1]] == i.policy.char
    );
    console.log(valid.count());
});
