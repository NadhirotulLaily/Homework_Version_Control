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
// Mencari nilai minimum dan maksimum pada array indeks genap 

var minGenap = indeksGenap[0]; 
var maxGenap = indeksGenap[0]; 

for (var i = 0; i < indeksGenap.length; i++) { 
    if (indeksGenap[i] < minGenap) { 
        minGenap = indeksGenap[i]; 
    } 
    if (indeksGenap[i] > maxGenap) { 
        maxGenap = indeksGenap[i]; 
    } 
} 
    
    // Mencari nilai minimum dan maksimum pada array indeks ganjil 
var minGanjil = indeksGanjil[0]; 
var maxGanjil = indeksGanjil[0];

for (var j = 0; j < indeksGanjil.length; j++) { 
    if (indeksGanjil[j] < minGanjil) { 
        minGanjil = indeksGanjil[j]; 
    } 
    if (indeksGanjil[j] > maxGanjil) { 
            maxGanjil = indeksGanjil[j]; 
    } 
}

var sumGenap = 0; 
var sumGanjil = 0; 
    
for (var k = 0; k < indeksGenap.length; k++) { 
    sumGenap += indeksGenap[k]; 
} 
for (var l = 0; l < indeksGanjil.length; l++) { 
    sumGanjil += indeksGanjil[l]; 
}

var meanGenap = sumGenap / indeksGenap.length; 
var meanGanjil = sumGanjil / indeksGanjil.length; 


const minComparison = minGenap > minGanjil ? "Min lebih besar indeks genap" : "Min lebih besar indeks ganjil";
const maxComparison = minGenap > minGanjil ? "Max lebih besar indeks genap" : "Max lebih besar indeks ganjil";
const totalComparison = sumGenap === sumGanjil ? "Total memiliki nilai sama antara indeks genap dan ganjil" : "Total berbeda antara indeks genap dan ganjil";
const meanComparison = meanGenap > meanGanjil ? "Rata-rata lebih besar indeks genap" : "Rata-rata lebih besar indeks ganjil";

console.log(minComparison);
console.log(maxComparison);
console.log(totalComparison);
console.log(meanComparison);