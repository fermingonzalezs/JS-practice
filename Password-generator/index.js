function generarContraseña(largoContraseña, incluirMayusculas, incluirMinusculas, incluirSimbolos, incluirNumeros) {
    const minusculas = "abcdefghijklmnñopqrstuvwxyz";
    const mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const numeros = "1234567890";
    const simbolos = "!#$%&/()=+}{´-.";

    let caracteresPermitidos = "";
    let contraseña = "";

    if (incluirMinusculas) caracteresPermitidos += minusculas;
    if (incluirMayusculas) caracteresPermitidos += mayusculas;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirSimbolos) caracteresPermitidos += simbolos;

    if (largoContraseña <= 0) {
        return "El largo de la contraseña debe ser mayor a 1.";
    }
    if (caracteresPermitidos.length === 0) {
        return "Por lo menos un tipo de caracter debe ser seleccionado.";
    }
    for (let i = 0; i < largoContraseña; i++) {
        contraseña += caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
    }
    return contraseña;
}

function generarYMostrarContraseña() {
    const largo = document.getElementById("largoContraseña").value;
    const incluirMayus = document.getElementById('mayus').checked;
    const incluirMinus = document.getElementById('minus').checked;
    const incluirNums = document.getElementById('nums').checked;
    const incluirSimbs = document.getElementById('simb').checked;

    const nuevaContraseña = generarContraseña(largo, incluirMayus, incluirMinus, incluirSimbs, incluirNums);
    document.getElementById('resultado').innerText = nuevaContraseña;
}
