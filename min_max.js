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
    
console.log("Indeks Genap");
console.log("Nilai Minimum : ", minGenap); 
console.log("Nilai Maksimum : ", maxGenap); 
console.log("Total : ", sumGenap); 
console.log("Rata-rata : ", meanGenap); 

console.log("Indeks Ganjil");
console.log("Nilai minimum : ", minGanjil); 
console.log("Nilai maksimum : ", maxGanjil); 
console.log("Total : ", sumGanjil); 
console.log("Rata-rata : ", meanGanjil);