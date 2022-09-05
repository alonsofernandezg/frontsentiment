'use strict';

/* 
var formData = new FormData();
var imagefile = document.querySelector('#file');
formData.append("image", imagefile.files[0]);
axios.post('upload_file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
}) */

let  analizar_archivo = async(pfile)=> {
    
    if (pfile.files[0]) {
       var formData = new FormData();
       for (const file of pfile.files)
           formData.append('files', file);
           
        await axios({
            method: 'post',
            url: 'https://sentimenttextapp.azurewebsites.net/files/',
            data: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
            })
           .then(response => {
               console.log(response);
           })
           .catch(error => {
               co;nsole.error(error);
           });
    }
};


