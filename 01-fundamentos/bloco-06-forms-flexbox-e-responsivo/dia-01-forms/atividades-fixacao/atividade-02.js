const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.onclick = (event) => {
  event.preventDefault();
};

INPUT_CHECKBOX.onclick = (event) => {
  event.preventDefault();
};

INPUT_TEXT.onkeypress = (event) => {
  if (event.key !== "a") event.preventDefault();
};
