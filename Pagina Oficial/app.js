function registrar() {
    var correo = document.getElementById('correo').Value;
    var contraseña = document.getElementById('contraseña').Value;

    firebase.auth().createUserWithEmailAndPassword(correo, contraseña).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}