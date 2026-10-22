// // // const mathFunc = require("./maths.js");

// // // console.log(mathFunc)

// // import chalk from "chalk";

// // console.log(chalk.red("Hello World"));

// // console.log(
// //     chalk.green(
// //         "I am a green line" +
// //        chalk.blue.underline.bold("with a blue substring")+
// //        "that become green again",
// //     ),
// // );

// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Hello World!!");
//   console.log(text);
// }

// doStuff();
// import os from 'node:os';

// In Terminal write - npm start 

// console.log(os.uptime());
// console.log(os.version());
// console.log(os.type());


import fs from "fs";
// Create a File and Write a file - Sync
//   fs.writeFileSync("./a.txt" ,"Hello from nodejs");

// Update a File
// fs.writeFileSync("./a.txt" , "Hello from nodejs which is updated now");

// Read a File
// let data = fs.readFileSync("./a.txt" , {encoding : "utf-8"});
// console.log(data);

// Delete a File
// fs.unlinkSync("./a.txt");

//Create a File and Update a File - Async
  console.log("Start");
//   fs.writeFile("./abc/def/index.js" , "Hello from async" function(){
//     console.log("file is Created");
//   });

  //Read a File
//   fs.readFile("./a.txt" , "utf-8" , function(){
//     console.log("File is Created");
//   });

// Delete a File
fs.unlink("./b.txt" , function (err){
    console.log(err);
})

  console.log("End");
