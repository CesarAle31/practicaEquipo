// Solicita el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");

// Muestra un saludo en la consola
console.log(`Hola, ${nombre}! Bienvenido al proyecto.`);

// Calcula cuántos años faltan para que cumpla 100 (si se quiere extender)
let edad = prompt("¿Cuántos años tienes?");
let añoActual = new Date().getFullYear();
let añoCien = añoActual + (100 - parseInt(edad));

console.log(`${nombre}, cumplirás 100 años en el año ${añoCien}.`); console.log("Hola, soy Román y estoy editando el archivo js/roman.js");


// Función para validar una contraseña
function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        console.log("❌ La contraseña debe tener al menos 8 caracteres.");
    } else if (!/[A-Z]/.test(contraseña)) {
        console.log("❌ Debe contener al menos una letra mayúscula.");
    } else if (!/[0-9]/.test(contraseña)) {
        console.log("❌ Debe contener al menos un número.");
    } else {
        console.log("✅ Contraseña válida.");
    }
}

// Prueba la función
let contraseñaUsuario = prompt("Ingresa tu contraseña:");
validarContraseña(contraseñaUsuario);