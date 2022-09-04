'use strict'

  
 
let analizar_texto = async(pdescripcion) => {
    let  resultado= [];

    await axios({
        method: 'get',
        params: {comment: pdescripcion},
        url: 'https://sentimenttextapp.azurewebsites.net/index',
        responseType: 'json',
    }).then((res) => {
        resultado = res.data
    }).catch((err) => {
        console.log('No se pudo establecer la comunicación con el servidor, ocurrió el siguiente error: ', err)
    });

    return resultado;
};
