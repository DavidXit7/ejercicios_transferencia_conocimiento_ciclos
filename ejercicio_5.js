let total = 0; // Guardamos el total de la compra

while (true) { // Ciclo que se repite hasta que el usuario decida no comprar mas
    let precio = parseFloat(prompt("Ingresa el precio del producto (0 para terminar):")); // Pedimos el precio del producto

    if (precio === 0) { // Si el usuario escribe 0, significa que no quiere comprar mas
        break; // Salimos del ciclo
    }

    total += precio; // Sumamos el precio al total
}

if (total > 100000) { // Si el total supera los $100.000
    let descuento = total * 0.10; // Calculamos el 10% de descuento
    total -= descuento; // Restamos el descuento al total
    alert("Se aplicó un descuento del 10%."); // Avisamos que hubo descuento
}

alert("El total de la compra es: $" + total); // Mostramos el total final