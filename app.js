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
  var fecha = document.getElementById('fecha');

 //aAgregar Documentos
 db.collection("user").add({
    first: nombre,
    last: apellido,
    born: fecha        })
.then(function(docRef){
  console.log("Document written ID ",docRef.id);                
                  })
.catch(function(error){
console.error("Error adding docuemnt: ", error)
});

}


 