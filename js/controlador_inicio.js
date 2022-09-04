'use strict';



/*------------------------------------------------------*/
const botonAnalizar= document.querySelector('#btnAnalizar');

const inputDescripcion = document.querySelector('#texto');


let validar= () =>{
  let error =false; 
  
  let elementos_requeridos = document.querySelectorAll('#frm-analizar [required]');
     
  
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
    
  
  inputDescripcion.value ='';
  
};

function obtenerDatos(){
  let errorv = validar();
 
  if (errorv) {
       
      Swal.fire({
          'title':'Sus datos no se pudieron enviar',
          'text':'Por favor complete todos los campos',
          'icon':'warning'
      });
  } else {
      
      
   
      let Descripcion = inputDescripcion.value;
      

      
      analizar_texto( Descripcion );  
     
  

      Swal.fire({
          'title': 'Proceso realizado con éxito',
          'text': 'Sus datos se enviaron adecuadamente',
          'icon': 'success'
      }).then(() => {
          limpiar();
      });
  }
};

/*carga respuesta*/



let resultados = [];
let resultados_datos = async () => {
    let resultados = await analizar_texto();
    document.getElementById("resultado").innerHTML = JSON.stringify(resultados, null, 4);

};

resultados_datos()
botonAnalizar.addEventListener('click',obtenerDatos);