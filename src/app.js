import add from "./js/add";
import say from "./js/say";
import "./css/style.css"; //itraukiam css faila
import banner from "./components/banner/ban";
import aside from "./components/aside/aside";
// const path = require("path");
// console.log(" path", path.resolve(__dirname));
console.log("index.js");

console.log(" add(1, 2, 3) = ", add(1, 2, 3));
console.log(' say("nice day")', say("nice day"));

const obj = { age: 30, name: "bob" };
const copy = { ...obj, gender: "male" };

console.log(" copy", copy);

const bestBanner = banner("Dynamic banners are here", "Webpack is here");

const bestAside = aside("Dynamic aside is here", "Aside btn is here");

document.body.append(bestBanner);
document.body.append(bestAside);

// 5P padaryti kad paspaudus aside mygtuka gautume konsole log savo bannerio antraste

const asideBtnEl = document.querySelector("aside > button");

asideBtnEl.addEventListener("click", function () {
  const bannerBannerEl = document.querySelector(".banner > h2");
  console.log(bannerBannerEl);
});

// 7P src direktorijoje sukurti components direktorija i ja pataplinti banner ir aside
// direktorijas.
