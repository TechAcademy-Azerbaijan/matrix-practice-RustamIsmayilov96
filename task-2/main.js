const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var matrix = input.split(','); // ['5', '2 4 7 12 9']
    let arr = []
    let arr1 = []
    let r = 3
    let c = 2
    for (let i = 0; i < r; i++) {
           for (let j = 0; j < c; j++){
            arr.push(matrix[i][j])
           }arr1.push(arr)
           
        arr = []
        }
           console.log(arr1);
});
