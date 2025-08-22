//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nombreMayor = "";
let edadMayor = 0;

for (let i = 1; i <= 3; i++) {
    let nombre = prompt("Introduce el nombre de la persona " + i + ":");
    let edad = parseInt(prompt("Introduce la edad de " + nombre + ":"));

    if (edad > edadMayor) {
        edadMayor = edad;
        nombreMayor = nombre;
    }
}

document.write(`La persona con mayor edad es: ${nombreMayor} con ${edadMayor} años`);
