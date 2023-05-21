const fname = document.querySelector("#name");
const number = document.querySelector("#number");
const addBtn = document.querySelector("#addBtn");
const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const updateBtn = document.querySelector("#updateBtn");

function renderTable() {
  const phonebook = getPhonebook();
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  phonebook.map(function (person) {
    let tr = document.createElement("tr");
    let tname = document.createElement("td");
    let tnumber = document.createElement("td");
    let tdelete = document.createElement("td");

    tname.innerHTML = person.name;
    tnumber.innerHTML = person.number;
    tdelete.innerHTML = `<button onclick="deleteButton(${person.id})">Delete</button>`;
    tr.appendChild(tname);
    tr.appendChild(tnumber);
    tr.appendChild(tdelete);
    tbody.appendChild(tr);

  });
}

function getCurrentFormData() {
  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;
  return { name, number };
}

function deleteButton(id) {
  deletePerson(id);
  renderTable();
}

addBtn.onclick = () => {
  const { name, number } = getCurrentFormData();
  addPerson(name, number);
  renderTable();
};

