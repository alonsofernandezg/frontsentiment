'use strict'

  
 
let analizar_texto = async(pdescripcion) => {
    let  resultado= [];

    await axios({
        method: 'post',
        url: 'https://sentimenttextapp.azurewebsites.net/index/',
        responseType: 'json',
        data: {
            'texto': pdescripcion,
        }
    }).then((res) => {
        resultado = res.data.resultado
    }).catch((err) => {
        console.log('No se pudo establecer la comunicación con el servidor, ocurrió el siguiente error: ', err)
    });

    return resultado;
};
