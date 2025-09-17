// Solicita el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");

// Muestra un saludo en la consola
console.log(`Hola, ${nombre}! Bienvenido al proyecto.`);

// Calcula cuántos años faltan para que cumpla 100 (si se quiere extender)
let edad = prompt("¿Cuántos años tienes?");
let añoActual = new Date().getFullYear();
let añoCien = añoActual + (100 - parseInt(edad));

console.log(`${nombre}, cumplirás 100 años en el año ${añoCien}.`); console.log("Hola, soy Román y estoy editando el archivo js/roman.js");
