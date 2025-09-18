const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cómo te llamas? ", function(nombre) {
    console.log(`¡Hola, ${nombre}!`);
    rl.close();
});



// Función para determinar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);
    } else {
        console.log(`${numero} es un número impar.`);
    }
}

// Ejemplo de uso
esParOImpar(7);  // Output: 7 es un número impar.
esParOImpar(12); // Output: 12 es un número par.