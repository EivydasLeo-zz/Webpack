import add from "./js/add";
import say from "./js/say";
import "./css/style.css"; //itraukiam css faila
import banner from "./banner/ban";
import asideFunction from "./aside/aside";
// const path = require("path");
// console.log(" path", path.resolve(__dirname));
console.log("index.js");

console.log(" add(1, 2, 3) = ", add(1, 2, 3));
console.log(' say("nice day")', say("nice day"));

const obj = { age: 30, name: "bob" };
const copy = { ...obj, gender: "male" };

console.log(" copy", copy);

const bestBanner = banner("Dynamic banners are here", "Webpack is here");

const bestAside = asideFunction("Dynamic aside is here", "Aside btn is here");

document.body.append(bestBanner);
document.body.append(bestAside);

// 5P padaryti kad paspaudus mygtuka gautume konsole log savo bannerio antraste
