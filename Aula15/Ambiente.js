let num = [5, 8, 2, 9, 3];

num.push(1); //adicionando mais um valor

num.sort(); // organizando em ordem crescente

console.log(`Nosso vetor é o ${num}`);

console.log(`O vetor possui ${num.length} elementos`);

console.log(`A primeira posição é o ${num[0]}`);

let pos = num.indexOf(8);

if (pos == -1) {
  console.log(`O valor não foi encontrado`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
