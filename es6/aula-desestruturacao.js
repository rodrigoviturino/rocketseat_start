// SÓ FUNCIONA COM OBJETO

const usuario = {
    nome: 'Rodrigo',
    idade: 25,
    facul: true,
    endereco: {
        rua: 'viela 19',
        numero: 32
    }
    
}

// let { nome , idade, facul } = usuario;
// console.log(nome, idade, facul);


const mostraUsuario = ( { nome, idade, endereco:{ rua } } ) => {
    console.log(nome, idade, rua);
    
}

// mostraUsuario(usuario); // passando OBJETO para alimentar as variaveis


// Destruturação no parametro
function teste( { rua }){
    console.log(rua)
}
// invocando função e passando objeto no parametro
teste(usuario.endereco)