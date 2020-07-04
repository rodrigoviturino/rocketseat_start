axios.get('https://api.github.com/users/rodrigoviturino')
    .then(function(response){
        console.log(response.data.bio);        
    })

    .catch(function(error){
        console.warn(error);        
    })