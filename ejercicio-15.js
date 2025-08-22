//15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingresa un texto:");
let contador = 0;
let vocales = "aeiouAEIOU";

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
    contador++;
    }
}

document.write(`Número de vocales ${contador}`);
