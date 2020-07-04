
/** ORIENTAÇÃO OBJETO
 *   - HERANÇA
 *      -- Class Filha está herdando do pai tudo que pertence. Mas precisa adicionar o super() no constructor da Class Filha
 */
class Pai {
    constructor(){
        this.lista = [];
    }

    add(info){
        this.lista.push(info);
        console.log(this.lista);
    }
}

class Filha extends Pai {
    constructor(){
        super();

        this.usuario = 'Viturino';
    }

    mostraUsuario (){
        console.log(this.usuario);        
    }

}

let item = new Filha();

document.querySelector('#botao').addEventListener('click', function(){
    item.add('teste1');
    item.mostraUsuario();
})
