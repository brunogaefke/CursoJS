let num = [2, 5, 7, 9, 12, 22, 55, 67];

console.log("Mostrando vetor num:");

for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor: ${num[pos]}`);
}

console.log("Fim do vetor num!");

console.log("-----------------------------------");

// Maneira simplificada:::::

for (let pos in num) {
  console.log(`A posição ${pos} tem o valor: ${num[pos]}`);
}
