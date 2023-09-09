var nilai_random = [];
var indeksGenap = [];
var indeksGanjil = [];

for (var i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 50) + 1;
    nilai_random.push(random);
    if (i % 2 === 0) {
        indeksGenap.push(i);
    } else {
        indeksGanjil.push(i);
    }
}

console.log("Indeks Genap : ", indeksGenap);
console.log("Indeks Ganjil : ", indeksGanjil);