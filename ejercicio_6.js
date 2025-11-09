let numeroSecreto = Math.floor(Math.random() * 20) + 1; // Generamos un numero aleatorio entre 1 y 20
let adivinanza; // Variable para guardar el numero que ingrese el usuario

while (adivinanza !== numeroSecreto) { // El ciclo se repite mientras no acierte
    adivinanza = parseInt(prompt("Adivina el numero entre 1 y 20:")); // Pedimos al usuario un numero

    if (adivinanza < numeroSecreto) { // Si el numero ingresado es menor
        alert("El numero secreto es mayor."); // Avisamos que el secreto es más grande
    } else if (adivinanza > numeroSecreto) { // Si el numero ingresado es mayor
        alert("El numero secreto es menor."); // Avisamos que el secreto es mas pequeño
    } else { // Si el numero ingresado es igual al secreto
        alert("¡Felicitaciones! Adivinaste el numero: " + numeroSecreto); // Mensaje de exito
    }
}