for (let num = 2; num <= 50; num++) { // Recorremos cada numero desde el 2 hasta el 50
    let es_primo = true; // Suponemos que el numero es primo

    for (let i = 2; i < num; i++) { // Probamos si el numero tiene algun divisor distinto de 1 y de si mismo
        if (num % i === 0) { // Si al dividir "num" entre "i" el resultado es exacto
            es_primo = false; // Entonces no es primo
            break; // Ya no necesitamos seguir probando
        }
    }

    if (es_primo) { // Si nunca encontramos divisor
        alert(num); // Mostramos el numero porque si es primo
    }
}