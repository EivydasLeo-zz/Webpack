import add from "./js/add.js";
import say from "./js/say.js";
import "./css/style.css"; //itraukiam css faila
// const path = require("path");
// console.log(" path", path.resolve(__dirname));
console.log("index.js");

console.log(" add(1, 2, 3) = ", add(1, 2, 3));
console.log(' say("nice day")', say("nice day"));

const obj = { age: 30, name: "bob" };
const copy = { ...obj, gender: "male" };

console.log(" copy", copy);
