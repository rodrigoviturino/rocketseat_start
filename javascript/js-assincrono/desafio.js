// function checaIdade(idade) {
//     return new Promise ( function(resolve, reject){
//         var xhr = new XMLHttpRequest();
        
//         if(idade > 18 ) {
//             resolve(idade)
//         } else {
//             reject(idade)
//         }
//     })
// }

// checaIdade(20)
//     .then(function(){
//         console.log('Maior que 18');        
//     })

//     .catch(function(){
//         console.log('Menor de idade');        
//     })

 // *** 

 
 function github(){    

     var input = document.querySelector('#app input').value;
     var ulElement = document.querySelector('#app ul');
     ulElement.innerHTML = "";

     
     minhaPromissa(input)     
     
        .then(function(response){
            for (const item of response) {
                var liElement = document.createElement('li');
                var text = document.createTextNode(item.name);
                
                ulElement.appendChild(liElement)           
                liElement.appendChild(text);
            }
                
        })

        .catch(function(error){
            console.log(error);
        })

}

function minhaPromissa(input){
    var usuario = input;
    
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+ usuario +'/repos')
        xhr.send(null)
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 ) {
                    if(xhr.status === 200 ) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject('Erro na requisição')
                    }
                }
            }
    });
}

