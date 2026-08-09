// let sum = function(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// function mult(a,b){
//     return a*b;
// }

// function div(a,b){
//     return a/b;
// }

// function calc(a,b){
//     return (a,b);
// }

// let ans = calc(2,3,mult);
// console.log(ans);

let arr = [1,2,3,4,5,6];

let ans = arr.map(function(ele, index,array){
    return ele*ele*ele;
})
console.log(ans)