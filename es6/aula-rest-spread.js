// SPREAD é conhecido por utilizar -> ... 
// REST ele pega o resto das propriedades/chaves

console.log('******* REST *******');
// REST
const usuario = {
    nome: 'Rodrigo',
    idade: 25,
    facul: true,
    endereco: {
        rua: 'Viela 19'
    }
}

let { endereco:{ rua }, ...resto } = usuario

console.log(resto); // vai imprimir o resto das propriedades que não foi atribuido alguma variavel

// REST + DESESTRUTURAÇÃO + ARRAY
    const arr = [1,3,5,6];

    let [ a , ...rest ] = arr ;
    console.log(rest);

// REST + DESESTRUTURAÇÃO + PARAMETROS
    function teste(a , b, ...params){
        return params
    }

    console.log(teste(1,2,10,11,12,13));


    /************** SPREAD ************ */
console.log('******* SPREAD *******');


// SPREAD - EXEMPLO 01
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [ ...arr1, ...arr2 ]
console.log('SPREAD NO ESCOPO DE ARRAY');
console.log(arr3);

// SPREAD - EXEMPLO 02
const user = {
    nome: 'Viturino',
    idade: 18,
    facul: true
}

let user1 = { ...user, nome: "Rodrigo" } // ao usar o spread, ele ja acessa as propriedades do OBJETO/VETOR que foi usado
console.log('REST EXEMPLO COM OBJETO, alteramos a propriedade nome, poque usamos o SPREAD e isso faz uma copia da estrutura do OBJETO/VETOR');

console.log(user1);



