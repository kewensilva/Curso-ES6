const usuarios = [
    { nome: 'Kewen', idade: 21, empresa: 'Rocketseat' },
    { nome: 'Tiago', idade: 24, empresa: 'facebook' },
    { nome: 'Michel', idade: 27, empresa: 'Rocketseat' },
];


// Exercicio 2.1
const map = usuarios.map(item => item.idade);
console.log(map);


// Exercicio 2.2
const filter = usuarios.filter(item => item.idade > 18 && item.empresa == 'Rocketseat');
console.log(filter);


// Exercicio 2.3
const find = usuarios.find(item => item.empresa === 'Rocketseat');
console.log(find);


// Exercicio 2.4
const united = usuarios.map(item => ({ item, idade: item.idade * 2 })).filter(item => item.idade <= 50);
console.log(united);
