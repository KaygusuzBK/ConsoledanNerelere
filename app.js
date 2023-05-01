var phonebook = [];

function write(message) {
  console.log(message);
}
class Person {
  constructor(id, name, number) {
    this.id = id;
    this.name = name;
    this.number = number;
  }
}

function addPerson(name, number) {
  var name = prompt("İsim girin:");
  var number = prompt("Numara girin:");
  if (name === null || number === null) {
    alert("İşlem iptal edildi");
  } else if (name.length > 2 && number.length > 2) {
    var id = phonebook.length + 1;
    var person = new Person(id, name, number);
    phonebook.push(person);
    write("Kişi eklendi!");
  } else { addPerson(); }
}
function list() {
  write("Kişiler");
  phonebook.forEach((person) => {
    write(person.id + "- İSMİ: " + person.name + " NUMARASI: " + person.number);
  });
}
function deletePerson(deleted) {
  if (phonebook.find((person) => person.id === parseInt(deleted))) {
    phonebook = phonebook.filter((person) => person.id !== parseInt(deleted));
    write("Kişi silindi!");
  } else write("Kişi bulunamadı!");
}
function editPerson() {
  var edited = prompt("Düzenlenecek kişinin id'sini girin:");
  if (phonebook.find((person) => person.id === parseInt(edited))) {
    var name = prompt(`düzenlenecek kişinin adı: ${phonebook[edited - 1].name} yeni adı:`);
    var number = prompt(`düzenlenecek kişinin numarası: ${phonebook[edited - 1].number} yeni numarası:`);
    person = new Person(edited, name, number);  
    phonebook[edited - 1] = person;
    write("Kişi düzenlendi!");
  } else write("Kişi düzenlenemedi!");
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function selected() {
  while (true) {
    var command = prompt("Komut girin (add/edit/delete/list/qiut)");
    if (command === "add") {
      addPerson();
    } else if (command === "edit" && phonebook.length > 0) {
      list();
      editPerson();
    } else if (command === "delete" && phonebook.length > 0) {
      list();
      var deleted = prompt("Silinecek kişinin id'sini girin:");
      deletePerson(deleted);
      
    } else if (command === "list") {
      list();
    } else if (command === "quit") {
      break;
      write("Çıkış yapılıyor...");
    } else {
      write("Hatalı komut girdin");
      selected();
      break;
    }
  }
}
selected();
