class List {
    constructor() {
        this.data = [];

    }
    add(data) {
        this.data.push(data);
        console.log(this.data);

    }
}

class TodoList extends List {

    constructor() {
        super();

        this.usuario = "Kewen";
    }
    mostrarUsuario(){
        console.log(this.usuario);
        
    }
}
var MinhaLista = new TodoList();
document.getElementById('novoTodo').onclick = function () {
    MinhaLista.add('Novo todo');
}
MinhaLista.mostrarUsuario();