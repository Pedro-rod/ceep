export default class Categorias {
    constructor() {
         this.categorias = [];
         this._inscritos = [];
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    inscrever(func) {
         this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
}