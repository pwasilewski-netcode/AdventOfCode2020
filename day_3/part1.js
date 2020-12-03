const fs = require('fs');
const [ stepX, stepY ] = [ 3, 1 ];

fs.readFile('input.txt', (err, buf) => {
    const map = buf.toString().split('\n').slice(0, -1);
    let [ trees, x ] = [ 0, 0 ];
    for (let y = stepY; y < map.length; y += stepY) {
        const row = map[y];
        x = (x + stepX) % row.length;
        if (row[x] == '#') {
            trees++;
        }
    }
    console.log(trees);
});
