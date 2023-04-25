var notunuz = window.prompt("Notunuzu girin");

const notlar = new Set();

function notEkle() {
  notlar.add(notunuz);
}
notEkle(notunuz);

if (notlar.size > 0) {
  notlar.forEach((nots) => {
    console.log(nots);
  });
}
