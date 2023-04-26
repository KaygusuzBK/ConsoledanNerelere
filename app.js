var notes = JSON.parse(localStorage.getItem("notes")) || [];

while (true) {
  var command = prompt("Komut girin (add/edit/delete/list/quit):");

  if (command === "add") {
    var note = prompt("Notunuzu girin:");
    notes.push(note);
    alert("Not eklendi!");
  } else if (command === "edit") {
    console.log("Notlar:");
    for (var i = 0; i < notes.length; i++) {
      console.log(i + "- " + notes[i]);
    }
    var index = prompt("Düzenlenecek notun sırasını seçiniz:");
    var newNote = prompt("Yeni notunuzu girin:");
    notes[index] = newNote;
    console.log("Not düzenlendi!");
  } else if (command === "delete") {
    console.log("Notlar:");
    for (var i = 0; i < notes.length; i++) {
      console.log(i + "- " + notes[i]);
    }
    var index = prompt("Silinecek notun indeksini girin:");
    notes.splice(index, 1);
    console.log("Not silindi!");
  } else if (command === "list") {
    console.log("Notlar:");
    for (var i = 0; i < notes.length; i++) {
      console.log(i + "- " + notes[i]);
    }
  } else if (command === "quit") {
    console.log("Uygulama kapatıldı.");
    localStorage.setItem("notes", JSON.stringify(notes));
    break;
  } else {
    console.log("Geçersiz komut, lütfen tekrar deneyin.");
  }
}
