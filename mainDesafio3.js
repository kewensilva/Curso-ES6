const arr = [1, 2, 3, 4, 5];

arr.map(item => item +10);


const usuario = {nome: 'Kewen', idade: 21};

const mostrarIdade = (usuario => usuario.idade);

mostrarIdade(usuario);

const nome = 'Kewen S';
const idade = 21;

const mostraUsuario = (nome = 'Kewen M', idade = 18) => ({nome,idade});

mostraUsuario(nome, idade);
mostraUsuario(nome);


const promise = () => new Promise (resolve, reject = resolve());