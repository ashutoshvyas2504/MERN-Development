let name = "Ashutosh";
let age = 22;

function greet(name , age) {
    // let message = "hey" + name + "your age is" +age; // lengthy way
    let message = `Hey ${name} your age is ${age}`; // easyway
    console.log(message);
}
greet(name , age);