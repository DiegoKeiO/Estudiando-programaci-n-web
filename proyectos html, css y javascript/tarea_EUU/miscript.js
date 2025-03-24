function ejemplo1(){
    alert("BIENVENIDOS AL CURSO DE EUU");
}

function ejemplo2(){
    let nombre;
        nombre=prompt("INGRESAR EL NOMBRE: ", " ");
        alert("BIENVENID@"+nombre);
}

function ejemplo3(){
    let nombre = prompt("Por favor, ingresa tu nombre:");
    if (nombre && nombre.trim() !== "") {
        // Calcular la longitud del nombre
        let longitud = nombre.length;
        // Convertir el nombre a mayúsculas
        let nombreMayuscula = nombre.toUpperCase();//toLowerCase()
        // Mostrar el resultado
    }
    else{
        alert("No has ingresado un nombre válido");
    }
}