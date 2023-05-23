const fname = document.querySelector("#name");
const number = document.querySelector("#number");
const addBtn = document.querySelector("#addBtn");
const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const editBtn = document.querySelector("#editBtn");
const tbody = document.querySelector("#tbody");

function renderTable() {
  const phonebook = getPhonebook();
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  phonebook.forEach((person) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.number}</td>
    <td>
      <button onclick="editButton(${person.id})">Edit</button>
      <button onclick="deleteButton(${person.id})">Delete</button>
    </td>
  `;
    tbody.appendChild(tr);
  });
}

function formSubmit(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;
  addPerson(name, number);
  renderTable();
  document.getElementById("addForm").reset();
}

function deleteButton(id) {
  deletePerson(id);
  renderTable();
}

function editButton(id) {
  const person = phonebook.find((person) => person.id === id);
  if (person) {
    document.querySelector("#name").value = person.name;
    document.querySelector("#number").value = person.number;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("editBtn").style.display = "inline-block";
    document.getElementById("editBtn").setAttribute("data-id", id);
    document.getElementById("editBtn").onclick = function () {
      editPersonData(id);
    };
  }
}

function editPersonData(id) {
  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;
  editPerson(id, name, number);
  renderTable();
  document.getElementById("addForm").reset();
  document.getElementById("addBtn").style.display = "inline-block";
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("editBtn").removeAttribute("data-id");
}

function getPerson(id) {
  const person = phonebook.find((person) => person.id === id);
  return person;
}

function editPersonData(id) {
  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;
  editPerson(id, name, number);
  renderTable();
}

addBtn.onclick = () => {
  const { name, number } = getCurrentFormData();
  addPerson(name, number);
  renderTable();
};

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

function getCurrentFormData() {
  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;
  return { name, number };
}
