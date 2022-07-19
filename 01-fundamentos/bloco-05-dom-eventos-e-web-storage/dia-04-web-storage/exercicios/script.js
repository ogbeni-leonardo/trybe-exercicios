function byId(id) {
  return document.getElementById(id);
}

const background = byId("background-color");
const fontFamily = byId("font-family");
const fontSize = byId("font-size");
const fontColor = byId("font-color");
const lineHeight = byId("line-height");

function saveToLocalStorage() {
  const data = {
    "background-color": background.value,
    "font-family": fontFamily.value,
    "font-size": fontSize.value,
    "font-color": fontColor.value,
    "line-height": lineHeight.value,
  };

  localStorage.setItem("user-adjust", JSON.stringify(data));

  loadLocalStorageData();
}

function loadLocalStorageData() {
  const getLocalStorageData = JSON.parse(localStorage.getItem("user-adjust"));

  for (let key in getLocalStorageData) {
    document.body.style.setProperty(`--${key}`, getLocalStorageData[key]);
    const option = document.querySelector(
      `#${key} option[value='${getLocalStorageData[key]}']`
    );
    option.selected = true;
  }
}

background.onchange = saveToLocalStorage;
fontFamily.onchange = saveToLocalStorage;
fontSize.onchange = saveToLocalStorage;
fontColor.onchange = saveToLocalStorage;
lineHeight.onchange = saveToLocalStorage;

window.onload = loadLocalStorageData;
