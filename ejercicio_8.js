const usuario_correcto = "admin"; // Usuario valido
const contrasena_correcta = "1234"; // Contraseña valida
let intentos = 0; // Contador de intentos

while (intentos < 3) { // Permitimos hasta 3 intentos
    let usuario = prompt("Ingresa tu usuario:"); // Pedimos el usuario
    let contrasena = prompt("Ingresa tu contraseña:"); // Pedimos la contraseña

    if (usuario === usuario_correcto && contrasena === contrasena_correcta) { // Si coincide usuario y contraseña
        alert("Bienvenido"); // Mensaje de acceso correcto
        break; // Salimos del ciclo porque ya acerto
    } else { // Si no coincide
        alert("Usuario o contraseña incorrectos"); // Avisamos el error
        intentos++; // Sumamos un intento
    }

    if (intentos === 3) { // Si ya hizo 3 intentos fallidos
        alert("Acceso denegado"); // Mostramos mensaje final
    }
}