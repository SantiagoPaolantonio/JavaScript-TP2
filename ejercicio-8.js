//8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

let num = parseInt(prompt("Introduce un número (máximo 50):"));

if (num > 50) {
    alert("El número no puede ser mayor a 50");
} else {
    for (let i = 1; i <= num; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += j;
    }
    document.write(`<br> ${linea}`);
    }
}
