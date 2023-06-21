var phonebook = [];

class Person {
  constructor(id, name, number) {
    this.id = id;
    this.name = name;
    this.number = number;
  }
}

function addPerson(name, number) {
  if (
    name !== "" &&
    number !== "" &&
    name.length <= 20 &&
    number.length === 11 &&
    !isNaN(number)
  ) {
    var id = phonebook.length + 1;
    var person = new Person(id, name, number);
    phonebook.push(person);
  }
}

function getPhonebook() {
  return phonebook;
}

function getPerson(id) {
  const person = phonebook.find((person) => person.id === id);
  return person;
}

function deletePerson(deleteId) {
  if (deleteId > 0 && deleteId <= phonebook.length) {
    phonebook.splice(deleteId - 1, 1);
    for (var i = 0; i < phonebook.length; i++) {
      phonebook[i].id = i + 1;
    }
  }
}

function editPerson(id, name, number) {
  if (
    name !== "" &&
    number !== "" &&
    name.length <= 20 &&
    number.length === 11 &&
    !isNaN(number)
  ) {
    const person = phonebook.find((person) => person.id === id);
    if (person) {
      person.name = name;
      person.number = number;
    }
  }
}

function list() {
  phonebook.forEach((person) => {
    console.log(person.id + "" + person.name + " " + person.number);
  });
}
