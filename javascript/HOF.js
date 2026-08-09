//filter 
// let arr = [1,2,3,4,5,6];

// let odd = function(ele) {
//     return ele % 2 != 0;
// };
// let even = function(ele) {
//     return ele % 2 == 0;
// };
// let ans = arr.filter(odd);
// console.log(ans);

// Question 2
// let arr = [
//     {name : 'Alice', age : 22},
//     {name : 'Bob', age : 15},
//     { name : 'charlie', age : 30},
//     { name : 'David' , age : 17}

// ];

// let ans = arr.filter(function(ele){
//     return ele.age > 18;
// })
// .map(function(ele){
//     return ele.name;
// });

// console.log(ans);

// Question 3

// let arr = [
//     { name: 'Laptop', price: 1000, inStock: true },
//     { name: 'Mouse', price: 25, inStock: false },
//     { name: 'Monitor', price: 200, inStock: true },
//     { name: 'Keyboard', price: 75, inStock: false },

// ];
// let ans = arr.filter(function(ele){
//     return ele.inStock==true;
// })
// .reduce(function(acc,curr){
//     return acc + curr.price;
// },0);
// console.log(ans)

//Question 3
// const fruits = ['apple','banana','apple','orange','banana','orange','apple'];
// const ans = fruits.reduce(function (acc,currEle) {
//        if (acc[currEle]) {
//        acc[currEle] = acc[currEle]+1;
//        } else {
//         acc[currEle] = 1;
//        }
//        return acc;
// },{})
// console.log(ans)
//

//Q.5 
const students = [
       { name: "emily", grade: "A" },
       { name: "Jack", grade: "B" },
       { name: "Sophia", grade: "A" },
       { name: "Danny", grade: "C" },
];

const ans = students.reduce(function (acc,currObj) {
       if (acc[currObj.grade]) {
              acc[currObj.grade].push(currObj.name);
       } else {
              acc[currObj.grade] = [currObj.name];
       }
       return acc;
},{});
console.log(ans);