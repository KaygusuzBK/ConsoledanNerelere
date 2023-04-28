var phonebook = [];

function write(message) {
  console.log(message);
}
function Person(name, number) {
  this.name = name;
  this.number = number;
}
function addPerson() {
  var name = prompt("İsim girin:");
  var number = prompt("Numara girin:");
  var person = new Person(name, number);
  phonebook.push(person);
  alert("Kişi eklendi!");
}
function list() {
  write("Kişiler:");
  phonebook.forEach(function (person) {
    console.log("İsmi: " + person.name + "  Numara:" + person.number);
  });
}
function deletePerson() {
  var deleted = prompt("Silinecek kişinin ismini giriniz:");
  if (phonebook.indexOf(deleted) > -1) {
    phonebook.splice(phonebook.indexOf(deleted), 1);
    write("Kişi silindi!");
  } else write("Kişi bulunamadı!");
}
function editPerson() {
  var edited = prompt("Düzenlenecek kişinin ismini giriniz:");
  if (phonebook.indexOf(edited) > -1) {
    var newName = prompt("Yeni ismi giriniz:");
    var newNumber = prompt("Yeni numarayı giriniz:");
    phonebook[phonebook.indexOf(edited)].name = newName;
    phonebook[phonebook.indexOf(edited)].number = newNumber;
    write("Kişi düzenlendi!");
  } else write("Kişi bulunamadı!");
}

while (true) {
  var command = prompt("Komut girin (add/edit/delete/list/quit");
  if (command === "add") {
    addPerson();
  } else if (command === "edit") {
    list();
    editPerson();
  } else if (command === "delete") {
    list();
    deletePerson();
  } else if (command === "list") {
    list();
  } else if (command === "quit") {
    console.log("Çıkış yapılıyor...");
    break;
  } else {
    write("Hatalı komut girdin");
    break;
  }
}
