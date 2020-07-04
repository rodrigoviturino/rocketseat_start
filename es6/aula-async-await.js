const minhaPromise = () => new Promise( (resolve, reject ) =>
    setTimeout( () => { resolve('OK') }, 2000 )
);

// *** SEM ARROW FUNCTION ***
    // minhaPromise()
    //     .then(response => {
    //         console.log(response)
    //     })

    // async function nome() {
    //     console.log(await minhaPromise())
    // }
// *** END SEM ARROW FUNCTION ***

// *** COM ARROW FUNCTION ***
    const teste = async () => {
        console.log(await minhaPromise())
        console.log(await minhaPromise())
        console.log(await minhaPromise())
    };

teste()