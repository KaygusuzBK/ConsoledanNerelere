const fname = document.querySelector("#name");
const number = document.querySelector("#number");
const addBtn = document.querySelector("#addBtn");
const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const editBtn = document.querySelector("#editBtn");
const tbody = document.querySelector("#tbody");
const restart = document.querySelector("#restart");

function CreateTable(person) {
  console.log(person);
  let tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${person.name}</td>
  <td>${person.number}</td>
  <td>
    <button onclick="editButton(${person.id})">Edit</button>
    <button onclick="deleteButton(${person.id})">Delete</button>
  </td> `;
  tbody.appendChild(tr);
}

function renderTable() {
  const phonebook = getPhonebook();
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  phonebook.forEach((person) => {
    CreateTable(person);
  });
}

function formSubmit(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const number = document.querySelector("#number").value.trim();
  addPerson(name, number);
  renderTable();
  document.getElementById("addForm").reset();
}

function deleteButton(id) {
  deletePerson(id);
  renderTable();
}

function editButton(id) {
  const { name, number } = getPerson(id);
  document.getElementById("editBtn").style.display = "inline-block";
  setCurrentFormData(id, name, number);
}

function editPersonData(id) {
  const { name, number } = getCurrentFormData();
  editPerson(id, name, number);
  renderTable();
}

function searchPerson(searchWord) {
  const filtered = phonebook.filter((person) => {
    return person.name === searchWord || person.number === searchWord;
  });
  return filtered;
}

addBtn.onclick = () => {
  const { name, number } = getCurrentFormData();
  addPerson(name, number);
  renderTable();
};

editBtn.onclick = () => {
  const { name, number } = getCurrentFormData();
  editPersonData(name, number);
  renderTable();
};

searchBtn.onclick = () => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  const { searchWord } = getCurrentSearchData();
  const persons = searchPerson(searchWord);
  console.log(persons);
  persons.forEach((person) => {
    CreateTable(person);
    console.log(person);
  });
};

restart.onclick = () => {
  renderTable();
};

function getCurrentFormData() {
  const name = document.querySelector("#name").value.trim();
  const number = document.querySelector("#number").value.trim();
  return { name, number };
}

function getCurrentSearchData() {
  const searchWord = document.querySelector("#searchWord").value.trim();
  return { searchWord };
}

function setCurrentFormData(id, name, number) {
  document.querySelector("#name").value = name;
  document.querySelector("#number").value = number;
  document.getElementById("editBtn").onclick = function () {
    editPersonData(id);
  };
}
