let Value = ["", "Name", "Worth", "Source", "Img"];
let BillElements = [];
let WarrenElements = [];
let MarkElements = [];
let LarryElements = [];
let MichaelElements = [];

for (let i = 0; i < 5; i++) {
  BillElements.push(document.getElementById(`Bill${Value[i]}`));
  WarrenElements.push(document.getElementById(`Warren${Value[i]}`));
  MarkElements.push(document.getElementById(`Mark${Value[i]}`));
  LarryElements.push(document.getElementById(`Larry${Value[i]}`));
  MichaelElements.push(document.getElementById(`Michael${Value[i]}`));
}
let names = [
  "Bill Gates",
  "Warren Buffett",
  "Mark Zuckerberg",
  "Larry Ellison",
  "Michael Bloomberg",
];
let elements = [
  BillElements,
  WarrenElements,
  MarkElements,
  LarryElements,
  MichaelElements,
];

const objectToMap = (json_ar) => {
  const allPersons = [];
  for (let i = 0; i < 5; i++) {
    const map = new Map();
    map.set("elemet", elements[i]);
    map.set("Name", json_ar[i].name);
    map.set("Worth", json_ar[i].worth);
    map.set("Source", json_ar[i].source);
    map.set("Img", json_ar[i].image);
    allPersons.push(map);
  }
  return allPersons;
};
let allPersons = objectToMap(json_ar);

const displayPerson = (personElement, i) => {
  personElement[0].style.display = "grid";
  personElement[1].textContent = allPersons[i].get("Name");
  personElement[2].textContent = allPersons[i].get("Worth");
  personElement[3].textContent = allPersons[i].get("Source");
  personElement[4].setAttribute("src", allPersons[i].get("Img"));
  personElement[4].setAttribute("alt", allPersons[i].get("Name"));
};

const displayAll = function () {
  for (let i = 0; i < allPersons.length; i++) {
    displayPerson(allPersons[i].get("elemet"), i);
  }
};
displayAll();

function clearAll() {
  for (let i = 0; i < names.length; i++) {
    elements[i][0].style.display = "none";
  }
}

for (let i = 0; i < 5; i++) {
  elements[i][0].addEventListener("click", function () {
    allPersons = allPersons.filter(function (person) {
      return person.get("Name") != names[i];
    });
    clearAll();
    displayAll();
  });
}
