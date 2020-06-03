const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco:{cidade}, endereco:{estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo ({ nome, endereco:{cidade}}){
 console.log(nome, cidade );
}

mostraInfo( empresa);