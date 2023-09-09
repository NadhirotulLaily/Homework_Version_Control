var nilai_random = [];

for (var i = 0; i < 100; i++) {
    var random = Math.floor(Math.random() * 50) + 1;
    nilai_random.push(random);
}

console.log(nilai_random);