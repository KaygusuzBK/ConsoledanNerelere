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
}
function list() {
  write("Kişiler:");
  phonebook.forEach(function (person) {
    console.log("İsmi: " + person.name + "  Numara:" + person.number);
  });
}
function deletePerson(deleted) {
  if (phonebook.find((person) => person.name === deleted)) {
    phonebook = phonebook.filter((person) => person.name !== deleted);
  } else write("Kişi bulunamadı!");
}
function editPerson() {
  var edited = prompt("Düzenlenecek kişinin ismini giriniz:");
  if (phonebook.find((person) => person.name === edited)) {
    deletePerson(edited);
    addPerson();
    write("Kişi düzenlendi!");
  } else write("Kişi bulunamadı!");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function selection() {
  while (true) {
    var command = prompt("Komut girin (add/edit/delete/list/quit");
    if (command === "add") {
      addPerson();
      alert("Kişi eklendi!");
    } else if (command === "edit") {
      list();
      editPerson();
    } else if (command === "delete") {
      list();
      var deleted = prompt("Silinecek kişinin ismini giriniz:");
      deletePerson(deleted);
      write("Kişi silindi!");
    } else if (command === "list") {
      list();
    } else if (command === "quit") {
      console.log("Çıkış yapılıyor...");
      sleep(15000);
      select();
    } else {
      write("Hatalı komut girdin");
    }
  }
}
selection();
