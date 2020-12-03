const fs = require('fs');
const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
];

fs.readFile('input.txt', (err, buf) => {
    const map = buf.toString().split('\n').slice(0, -1);
    const counts = slopes.map(s => countTrees(map, s[0], s[1]));
    const count = counts.reduce((acc, cur) => acc == 0 ? cur : acc * cur, 0);
    console.log(counts, count);
});

function countTrees(map, stepX, stepY) { 
    let [ trees, x ] = [ 0, 0 ];
    for (let y = stepY; y < map.length; y += stepY) {
        const row = map[y];
        x = (x + stepX) % row.length;
        if (row[x] == '#') {
            trees++;
        }
    }
    return trees;
}