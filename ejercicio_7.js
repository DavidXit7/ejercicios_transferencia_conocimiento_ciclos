let pares = 0; // Contador de numeros pares
let impares = 0; // Contador de numeros impares

for (let i = 1; i <= 10; i++) { // Recorremos 10 veces para pedir 10 numeros
    let numero = parseInt(prompt("Ingresa el numero " + i + ":")); // Pedimos un numero al usuario

    if (numero % 2 === 0) { // Si el numero dividido entre 2 da residuo 0
        pares++; // Aumentamos el contador de pares
    } else { // Si no es par
        impares++; // Aumentamos el contador de impares
    }
}

alert("Cantidad de números pares: " + pares); // Mostramos cuantos pares hubo
alert("Cantidad de números impares: " + impares); // Mostramos cuantos impares hubo