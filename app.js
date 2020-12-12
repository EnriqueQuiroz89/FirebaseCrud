// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC7IxVax8cZ5eLwEhlHE5leNVlX7TBUIQ0",
    authDomain: "firestorecrud-f8226.firebaseapp.com",
    projectId: "firestorecrud-f8226"
  });
  
  var db = firebase.firestore();


function guardar(){
/*para pasar los datos de los input a las variables
ocupamos el DOM */

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var fecha = document.getElementById('fecha').value;

 //aAgregar Documentos
 //Si tu quieres una nueva coleccion basta con cambiar el nombre

 db.collection("personas").add({
    first: nombre,
    last: apellido,
    born: fecha        })
.then(function(docRef){ /*Aqui se indica que pasara si hay exito*/

  console.log("Document written ID ",docRef.id);
  /**Limpiamos los campos de los input*/
      document.getElementById('nombre').value='';
      document.getElementById('apellido').value= '';
      document.getElementById('fecha').value='';    
  
                  })
.catch(function(error){  /*Aqui se indica que pasara si hay falla*/
console.error("Error adding docuemnt: ", error)
});

}

//leer datos
db.collection("personas").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
    });
});


 