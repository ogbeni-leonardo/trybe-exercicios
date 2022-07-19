function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// 01
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const daysList = document.getElementById("days");

for (let day of dezDaysList) {
  let listItem = document.createElement("li");
  listItem.innerText = day;
  listItem.className = "day";

  daysList.appendChild(listItem);

  if ([24, 25, 31].includes(day)) {
    listItem.classList.add("holiday");
    if (day === 25) listItem.classList.add("friday");
  } else if ([4, 11, 18, 25].includes(day)) {
    listItem.classList.add("friday");
  }
}

// 02
function holidayButton(string) {
  const newElement = document.createElement("button");
  newElement.id = "btn-holiday";
  newElement.innerText = string;
  return newElement;
}

const holidayButtonElement = holidayButton("Feriados");

const buttonsContainer = document.getElementsByClassName("buttons-container");

buttonsContainer[0].appendChild(holidayButtonElement);

// 03
holidayButtonElement.addEventListener("click", () => {
  const holiday = document.getElementsByClassName("holiday");
  for (let day of holiday) {
    holidayDefaultBackground = day.style.backgroundColor;
    if (holidayDefaultBackground === "lightgray") {
      day.style.backgroundColor = "rgb(238,238,238)";
    } else {
      day.style.backgroundColor = "lightgray";
    }
  }
});

// 04
function fridayButton(string) {
  const newElement = document.createElement("button");
  newElement.id = "btn-friday";
  newElement.innerText = string;
  return newElement;
}

const fridayButtonElement = fridayButton("Sexta-feira");

buttonsContainer[0].appendChild(fridayButtonElement);

// 05
const fridayButtonColor = fridayButtonElement.style.color;

fridayButtonElement.addEventListener("click", () => {
  const fridayDays = document.getElementsByClassName("friday");
  for (let item of fridayDays) {
    if (item.style.color === fridayButtonColor) {
      item.style.color = "green";
    } else {
      item.style.color = fridayButtonColor;
    }
  }
});

// 06
const days = daysList.children;
const dayDefaultFontSize = days[0].style.fontSize;

for (let day of days) {
  day.addEventListener("mouseover", () => {
    day.style.fontSize = "30px";
  });

  day.addEventListener("mouseout", () => {
    day.style.fontSize = dayDefaultFontSize;
  });
}

// 07
function addTasks(taskName, taskColor) {
  const taskItem = document.createElement("span");
  taskItem.innerText = taskName;
  const tasksContainer = document.getElementsByClassName("my-tasks");
  tasksContainer[0].appendChild(taskItem);
  tasksContainer[0].appendChild(taskLegend(taskColor));
}

addTasks("Estudar", "orangered");
addTasks("Fazer trilha", "dodgerblue");

// 08
function taskLegend(color) {
  const taskLegendElement = document.createElement("div");
  taskLegendElement.className = "task";
  taskLegendElement.style.backgroundColor = color;
  return taskLegendElement;
}

// 09
const tasksItems = document.getElementsByClassName("task");

for (let task of tasksItems) {
  task.addEventListener("click", () => {
    const selectedItem = document.getElementsByClassName("selected");
    let amISelected = false;
    if (task.className.includes("selected")) {
      amISelected = true;
    }
    if (selectedItem.length > 0) {
      selectedItem[0].classList.remove("selected");
    }
    if (amISelected) return;
    task.classList.add("selected");
  });
}

for (let day of days) {
  day.addEventListener("click", () => {
    let selectedTask = document.getElementsByClassName("selected");
    if (day.style.color.length !== 0) {
      day.style.color = "";
      return;
    }
    if (selectedTask.length > 0) {
      day.style.color = selectedTask[0].style.backgroundColor;
    }
  });
}

// 10 [BÔNUS]
function myCommitment(commitment) {
  const newElement = document.createElement("p");
  newElement.innerText = commitment;
  const commitmentsList = document.querySelector(".tasks-container");
  commitmentsList.appendChild(newElement);
}

function validCommitment(element) {
  const elementValue = element.value;
  if (elementValue.length > 0) return elementValue;
  return false;
}

const commitmentsButton = document.getElementById("btn-add");
const commitmentsValue = document.getElementById("task-input");

commitmentsButton.addEventListener("click", () => {
  if (!validCommitment(commitmentsValue)) {
    alert("Erro! Compromisso inválido.");
    return;
  }
  myCommitment(commitmentsValue.value);
});

commitmentsValue.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (validCommitment(event.target)) {
      myCommitment(event.target.value);
      return;
    }
    alert("Error! Compromisso inválido.");
  }
});
