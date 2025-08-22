//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que indica 30).

let num = +prompt("Introduce un número (máximo 50):");

if (num > 50) {
    alert("El número no puede ser mayor a 50");
} else {
    for (let i = num; i >= 1; i--) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
    document.write(`<br> ${linea}`);
    }
}

