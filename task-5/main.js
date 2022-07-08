const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
const matrix = []
for (let i = 0; i < n; i++) {
        matrix.push(new Array(n).fill("*"))
}
for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
}
});
