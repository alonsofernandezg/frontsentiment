'use strict';
const fileInput = document.querySelector('#fileup'); 
const botonAnalizarresumen= document.querySelector('#btnAnalizarresumen');

let validar= () =>{
    let error =false; 
    
    let elementos_requeridos = document.querySelectorAll('#frm-fileup [required]');
       
    
    for (let i = 0; i < elementos_requeridos.length; i++) {
        if (elementos_requeridos[i].value == '') {
            elementos_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            elementos_requeridos[i].classList.remove('input-error');
        }
    }
 
    return error;
};

function limpiar(){
    
    fileInput.src = '';
}
function obtenerDatos(){
    let errorv = validar();
   
    if (errorv) {
         


        Swal.fire({
            'title':'Sus datos no se pudieron enviar',
            'text':'Por favor reviselos campos resaltados',
            'icon':'warning'
        });
    } else {
       
        let pfile = fileInput;
       
        analizar_archivo(pfile);  
        
        Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron adecuadamente',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

function cancelar() {
    window.history.back();
};

botonAnalizarresumen.addEventListener('click', obtenerDatos);