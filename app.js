const fname = document.querySelector("#name");
const number = document.querySelector("#number");
const addBtn = document.querySelector("#addBtn");
const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const tbody = document.querySelector("#tbody");
const restart = document.querySelector("#restart");
var modalNameBar = document.querySelector("#modalNameBar");
var modalNumberBar = document.querySelector("#modalNumberBar");
var contactBtn = document.querySelector("#contactBtn");

function CreateTable(person) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
  <td>${person.name}</td>
  <td>${person.number}</td>
  <td>
    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editButton(${person.id})">Edit</button>
    <button class="btn btn-danger" onclick="deleteButton(${person.id})">Delete</button>
  </td> `;
  tbody.appendChild(tr);
  if (tbody.innerHTML !== "") {
    contactBtn.style.display = "none";
  }
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
  if (tbody.childElementCount === 0) {
    contactBtn.style.display = "inline-block";
  }
}

function editButton(id) {
  const { name, number } = getPerson(id);
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

function redirectInput() {
  document.getElementById("name").focus();
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
  document.querySelector("#searchWord").value = "";
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
  document.querySelector("#modalNameBar").value = name;
  document.querySelector("#modalNumberBar").value = number;
  document.getElementById("editBtn").onclick = function () {
    editPersonData(id);
  };
}
