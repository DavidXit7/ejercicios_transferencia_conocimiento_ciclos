let continuar = true; // Variable para controlar si repetimos el proceso

while (continuar) { // Mientras el usuario quiera seguir
    let numero = parseInt(prompt("Ingresa un numero para ver su tabla de multiplicar:")); // Pedimos el numero

    alert("Tabla de multiplicar del " + numero + ":");

    for (let i = 1; i <= 12; i++) { // Ciclo para multiplicar del 1 al 12
        alert(numero + " x " + i + " = " + (numero * i)); // Mostramos cada resultado
    }

    let respuesta = prompt("¿Quieres consultar otra tabla? (si/no)"); // Preguntamos si desea repetir
    if (respuesta.toLowerCase() !== "si") { // Si la respuesta no es "si"
        continuar = false; // Terminamos el ciclo
        alert("Programa finalizado."); // Mensaje de cierre
    }
}