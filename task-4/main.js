const n = 5
const matrix= []

for (let i = 0; i < n; i++) {
    matrix.push(new Array(n))
}
let count = 1
let j = 0
let i = 0
let directionI = 0
let directionJ = 0

while(count <= n**2){
    matrix[i][j] == count;

if( j+directionJ === n||
    i+directionI == n ||
    j+directionJ == -1||
    matrix[i+directionI][j+directionJ] != undefined){
        let temp = directionI
        directionI = directionJ
        directionJ =  temp
    }
    i= i+ directionI
    j=j+directionJ
    count++
}
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
}
