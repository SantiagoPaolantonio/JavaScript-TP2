//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Ingresa un texto:");
let textoReverso = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoReverso += texto[i];
}

document.write(`Texto al reves: ${textoReverso}`);
