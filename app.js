var phonebook = [];

function getUserInfo() {
  var name = prompt("İsim girin:");
  var number = prompt("Numara girin:");
  return { name, number };
}
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
  var { name, number } = getUserInfo();
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
function deletePerson(deleteId) {
  if (deleteId === null) {
    alert("İşlem iptal edildi");
  } else if (deleteId > 0 && deleteId <= phonebook.length) {
    phonebook.splice(deleteId - 1, 1);
    write("Kişi silindi!");
    for (var i = 0; i < phonebook.length; i++) { // id'leri yeniden düzenlemek için ebem
      phonebook[i].id = i + 1;
    }  
  } else write("Kişi bulunamadı!");
}
function editPerson() {
  var edited = prompt("Düzenlenecek kişinin id'sini girin:");
  idcheck = phonebook.find((person) => person.id === parseInt(edited));
  if (idcheck) {
    var nName = prompt(`düzenlenecek kişinin adı: ${phonebook[edited - 1].name} yeni adı:`);
    var nNumber = prompt(`düzenlenecek kişinin numarası: ${phonebook[edited - 1].number} yeni numarası:`);
    phonebook[edited - 1].id = edited;
    phonebook[edited - 1].name = nName;
    phonebook[edited - 1].number = nNumber;
    write("Kişi düzenlendi!");
  } else write("Kişi düzenlenemedi!");
}


function selected() {
  while (true) {
    var command = prompt("Komut girin (add/edit/delete/list/quit)");
    if (command === "add") {
      addPerson();
    } else if (command === "edit" && phonebook.length > 0) {
      list();
      editPerson();
    } else if (command === "delete" && phonebook.length > 0) {
      list();
      var deleteId = prompt("Silinecek kişinin id'sini girin:");
      deletePerson(deleteId);
      
    } else if (command === "list") {
      list();
    } else if (command === "quit") {
      write("Çıkış yapılıyor...");
      break;
    } else {
      write("Hatalı komut girdin");
      selected();
      break;
    }
  }
}
selected();
