for (let estudiante = 1; estudiante <= 5; estudiante++) { // Recorremos cada estudiante del 1 al 5
    let suma_notas = 0; // Guardamos la suma de las notas de este estudiante

    for (let i = 1; i <= 3; i++) { // Cada estudiante tiene 3 notas
        let nota = parseFloat(prompt("Ingresa la nota " + i + " del estudiante " + estudiante + " (el rango de notas es de 0 a 5)")); // Pedimos la nota al usuario
        suma_notas += nota; // Vamos sumando las notas
    }

    let promedio = suma_notas / 3; // Calculamos el promedio dividiendo la suma entre 3

    alert("Estudiante " + estudiante + " - Promedio: " + promedio); // Mostramos el promedio en consola

    if (promedio >= 3.0) { // Si el promedio es mayor o igual a 3.0
        alert("Resultado: APROBADO"); // Mostramos que aprobo
    } else { // Si el promedio es menor a 3.0
        alert("Resultado: REPROBADO"); // Mostramos que reprobo
    }
}