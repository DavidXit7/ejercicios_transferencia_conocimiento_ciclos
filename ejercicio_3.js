const saldo_inicial = 1000; // Saldo inicial definido como constante
let saldo = saldo_inicial; // Variable para ir actualizando el saldo

while (true) { // Ciclo infinito hasta que el usuario decida salir
    let retiro = parseInt(prompt("Tu saldo actual es: $" + saldo + "\n¿Cuánto deseas retirar? (Ingresa 0 para salir)"));

    if (retiro === 0) { // Si el usuario ingresa 0, termina el programa
        alert("Gracias por usar el cajero. Tu saldo final es: $" + saldo);
        break;
    }

    if (retiro > saldo) { // Si intenta retirar mas de lo que tiene
        alert("Error: No tienes fondos suficientes. Tu saldo actual es: $" + saldo);
    } else if (retiro > 0) { // Si el retiro es valido
        saldo -= retiro; // Restamos el monto al saldo
        alert("Retiro exitoso de $" + retiro + ". Tu nuevo saldo es: $" + saldo);
    } else {
        alert("Por favor ingresa un valor válido.");
    }
}