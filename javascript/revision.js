// Arrow function 

// let sum = (a, b) => {
//     return a + b;
// };

// let sum = (a, b) => a + b;
// let ans = sum(1,2)
// console.log(ans);

// function greet() {
//     console.log("Hello");
// };


function cutTheBread(cb){
    setTimeout(function (){
        let bread = "Cutted Bread";
        cb(bread);
    },2000);
}

function cb (data){
    console.log(data);
}

cutTheBread(cb);