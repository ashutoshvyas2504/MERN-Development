// one();
// console.log(a);
// var a = 10;
// console.log(a);
// function one(){
//     console.log(a);
//     var a = 99;
//     console.log(a)
// }
// one();

// one();
// console.log(a);
// var a = 10;
// var  b = 199;
// console.log(a);
// function one(){
//     console.log(a);
//     var a = 99;
//     console.log(b)
//     b = 200;
// }
// console.log(b)
// one();

// doubt (Hoisting concept)
// one();
// console.log(a);
// var a = 10;
// console.log(b);
// var  b = 199;
// console.log(a);
// console.log(b);
// function one(){
//     console.log(a);// why this is undefined not 10 , bcz of Hoisting
//     /*var*/  a = 99; // iski wajah se hoisting hui  ( var a = 99) ko firse declare kiya 
//     console.log(b) // 199 bcz b ko redeclare nhi kiya gya hai 
//     b = 200; // Reassign hui hai b ko value naa ki Redeclare
// }
// console.log(b)
// one();



// functions --- the variables which can be accessed in a function is called function scoped variable 

// // SCOPE CHAINING CODE
// console.log(a);
// console.log(b);
// var a = 100;
// var b = 99;
// console.log(a);
// console.log(b);
// function abc() {
//     console.log(a);
//     var a = 199;
//     b = 199;
//     console.log(a);
//     console.log(b);
//     function def() {
//         var x = 100;
//         console.log(x);
//         console.log(a);
//         console.log(b);

//         xyz();
//         function xyz() {
//             console.log(x);
//             console.log(a);
//             console.log(b);
//         }
//         b = 999;
//     }
//     def();
// }
// abc();
// // console.log(x);
// console.log(a);
// console.log(b);


// let and const 


console.log(a);
let a = 100;
console.log(a);

{
   
}
