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
    let count = 0
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix.length; j++){
    if(matrix[i][j]<0 && matrix[i][j]%2==0){
        count++
        sum = sum + matrix[i][j]
    }
    }
    }console.log(count);
    console.log(sum);
}); 
