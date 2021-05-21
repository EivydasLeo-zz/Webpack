import "./aside.css";
export default function asideFunction(title, btnText) {
  const aside = document.createElement("aside");
  aside.className = "aside";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.textContent = "Sarasas1";
  const li2 = document.createElement("li");
  li2.textContent = "Sarasas2";
  const li3 = document.createElement("li");
  li3.textContent = "Sarasas3";
  const button = document.createElement("button");
  button.textContent = btnText;

  ul.append(li1, li2, li3);
  aside.append(h2, ul, button);

  return aside;
}
