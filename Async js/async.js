// We can acheive asynchronous nature of JS using
// a-- callback function
// b-- promises
// c-- asynchronous

// 1--  Flipkart
// 2-- JUS PAY
// 3 -- AXIS BANK
// set timeout -- Settimeout is a higher order function which takes 2 things one is callback 
// and second is time in ms, it executes the callback function after the the time is elapsed

// The V shaoe of Code in callback is called Pyramid of Dome
// Nested callback == Callback hell
// let paymentConfirmation = true;

// function makePaymentFlipkart(data) {
//     console.log("Start");
//     if (data) {
//         setTimeout(function () {
//             console.log("Data is correct");
//             setTimeout(function () {
//                 console.log("Details is correct");
//                 setTimeout(function () {
//                     console.log("Payment Confirm");
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     } else {
//         console.log("Payment Failed --- Details not Found");
//     }
//     console.log("End");
// }

// makePaymentFlipkart(123); 

// 1) Cut the Bread
// 2) Add stuffing
// 3) bake the bread

// let raw = "Bread";

// function cutTheBread(cb) {
//   setTimeout(function () {
//     let cuttedBread = "Bread" + "cut";
//     console.log(cuttedBread);
//     cb();
//   }, 2000);
// }

// function addStuffing(cb) {
//   setTimeout(function () {
//     let StuffedBread = "cuttedBread" + "Stuffing";
//     console.log(StuffedBread);
//      cb();
//   }, 2000);
// }

// function baking(cb) {
//   setTimeout(function () {
//     let sandwich = "StuffedBread" + "Baking";
//     console.log(sandwich);
//   }, 2000);
// }
// // console.log("Start");
// // cutTheBread(() => {
// //   addStuffing(() => {
// //     baking();
// //   });
// // });
// // console.log("End");

// //  cutTheBread(addStuffing(baking)) // wrong Syntax 
// //cutTheBread(()=>{addStuffing()})

// cutTheBread(addStuffing())

// console.log("Start"); 

// function cb(){
//   addStuffing(cb2)
// }

// cutTheBread(cb)


function cutTheBread(cb) {
  setTimeout(function () {
    let bread = "Cutted Bread";
    console.log(bread);
    cb();
  }, 2000);
}

function addStuffing(cb) {
  setTimeout(function () {
    let StuffedBread = "cuttedBread" + "Stuffing";
    console.log(StuffedBread);
    cb();
  }, 2000);
}

function baking(cb) {
  setTimeout(function () {
    let sandwich = "StuffedBread" + "Baking";
    console.log(sandwich);
    cb();
  }, 2000);
}

function readyAnnouncment() {
  console.log("Sandwich Is ready ");
}

// cutTheBread(addStuffings(baking))

cutTheBread(function () {
  addStuffing(function () {
    baking(readyAnnouncment);
  });
});