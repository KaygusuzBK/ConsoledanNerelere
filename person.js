var phonebook = [];

function getUserInfo() {
  return { name, number };
}
class Person {
  constructor(id, name, number) {
    this.id = id;
    this.name = name;
    this.number = number;
  }
}
function addPerson(name, number) {
  if (name === null || number === null) {
  } else if (name !== "" && number !== "") {
    var id = phonebook.length + 1;
    var person = new Person(id, name, number);
    phonebook.push(person);
  } else {
    addPerson();
  }
}
function getPhonebook() {
  return phonebook;
}
function deletePerson(deleteId) {
  if (deleteId > 0 && deleteId <= phonebook.length) {
    phonebook.splice(deleteId - 1, 1);
    for (var i = 0; i < phonebook.length; i++) {

      phonebook[i].id = i + 1;
    }
  } 
}
function editPerson() {
  var edited = prompt("Düzenlenecek kişinin id'sini girin:");
  idcheck = phonebook.find((person) => person.id === parseInt(edited));
  if (idcheck) {
    var nName = prompt(
      `düzenlenecek kişinin adı: ${phonebook[edited - 1].name} yeni adı:`
    );
    var nNumber = prompt(
      `düzenlenecek kişinin numarası: ${
        phonebook[edited - 1].number
      } yeni numarası:`
    );
    phonebook[edited - 1].id = edited;
    phonebook[edited - 1].name = nName;
    phonebook[edited - 1].number = nNumber;
    write("Kişi düzenlendi!");
  } else write("Kişi düzenlenemedi!");
}