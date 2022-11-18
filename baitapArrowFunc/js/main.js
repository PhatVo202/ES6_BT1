const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const getMyEle = (ele) => document.getElementById(ele);

const loadColor = () => {
  let content = "";
  for (let i in colorList) {
    content += `<button onclick="changeColor('${colorList[i]}')" class="color-button ${colorList[i]}  "></button>`;
  }
  getMyEle("colorContainer").innerHTML = content;
};

const changeColor = (data) => {
  getMyEle("house").classList.add(data);
};

window.onload = () => {
  loadColor();
};
