var phonebook = [];

function Person(name, number) {
  this.name = name;
  this.number = number;
}

while (true) {
  var command = prompt("Komut girin (add/edit/delete/list/quit");

  if (command === "add") {
    var name = prompt("isim giriniz");
    var number = prompt("numara giriniz");
    var person = new Person(name, number);
    phonebook.push(person);
    alert("Kişi eklendi!");
  } else if (command === "edit") {
    console.log("kişi listesi:");
    phonebook.forEach(function (person) {
      console.log("İsmi: " + person.name + "  Numara:" + person.number);
    });
    var edited = prompt("Düzenlenecek kişinin ismini giriniz:");
    if (phonebook.indexOf(edited) > -1) {
      var name = prompt("isim giriniz");
      var number = prompt("numara giriniz");
      var person = new Person(name, number);
      phonebook.splice(phonebook.indexOf(edited), 1, person);
      console.log("Kişi düzenlendi!");
    } else console.log("Kişi yok");
  } else if (command === "delete") {
    console.log("Notlar:");
    console.log("kişi listesi:");
    phonebook.forEach(function (person) {
      console.log("İsmi: " + person.name + "  Numara:" + person.number);
    });
    var deleted = prompt("Silinecek kişinin ismini giriniz:");
    if (phonebook.indexOf(deleted) > -1) {
      phonebook.splice(phonebook.indexOf(deleted), 1);
      console.log("Kişi silindi!");
    } else console.log("Kişi bulunamadı!");
  } else if (command === "list") {
    console.log("kişi listesi:");
    phonebook.forEach(function (person) {
      console.log("İsmi: " + person.name + "  Numara:" + person.number);
    });
  } else if (command === "quit") {
    console.log("Uygulama kapatıldı.");
    break;
  } else {
    console.log("Geçersiz komut, lütfen tekrar deneyin.");
    break;
  }
}
