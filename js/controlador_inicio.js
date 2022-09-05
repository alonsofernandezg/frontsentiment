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
/* const tbody = document.querySelector('#tbl-resultado tbody');
let lista_resultados = [];
let mostrar_resultados = async() => {
    let lista_resultados = await analizar_texto();
    
  
    for (let i = 0; i < lista_resultados.length; i++) {
        tbody.innerHTML = '';
        let fila = tbody.insertRow();
      
       let celda_oracion = fila.insertCell().innerHTML = lista_resultados[i]['sentence'];
       let celda_tipo_incidente = fila.insertCell().innerHTML = lista_incidente[i]['probas'];
       let celda_ruta = fila.insertCell().innerHTML = lista_incidente[i]['is_multilabel'];
       let celda_ubicacion_incidente =  fila.insertCell().innerHTML = lista_incidente[i]['output'];
   
      
    }

   
};
 */
let mostrar_datos = async() => {
    let lista_resultados = await analizar_texto();
    
document.querySelector('#resultado').value = lista_resultados[0]['output'];

};

mostrar_datos()
botonAnalizar.addEventListener('click',obtenerDatos);