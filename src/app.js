import add from "./js/add";
import say from "./js/say";
import "./css/style.css"; //itraukiam css faila
import banner from "./components/banner/ban";
import aside from "./components/aside/aside";

import cuteGreen from "./img/download.jpg";

const img1 = document.createElement("img");
img1.src = cuteGreen;

const bestBanner = banner("Dynamic banners are here", "Webpack is here");

const bestAside = aside("Dynamic aside is here", "Aside btn is here");

document.body.append(bestBanner, bestAside, img1);

// 5P padaryti kad paspaudus aside mygtuka gautume konsole log savo bannerio antraste

const asideBtnEl = document.querySelector("aside > button");

asideBtnEl.addEventListener("click", function () {
  const bannerBannerEl = document.querySelector(".banner > h2");
  console.log(bannerBannerEl);
});

// 7P src direktorijoje sukurti components direktorija i ja pataplinti banner ir aside
// direktorijas.
