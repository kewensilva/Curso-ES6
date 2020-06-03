const arr = [1, 2, 3, 4, 5, 6]


const [ x , ...y] = arr;

console.log(x);
console.log(y);


function soma (...params){
    return params.reduce((total, next) => total + next);

}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));




const usuario ={
    nome: 'Kewen',
    idade: 21,
    endereco: {
        cidade: 'Guarapuava',
        uf: 'PR',
        pais: 'BR',
    }
};

const usuario2 = {... usuario, nome: 'Gabriel' }

const usuario3 = {... usuario, cidade:'lontras'}

console.log(usuario2);
console.log(usuario3);
