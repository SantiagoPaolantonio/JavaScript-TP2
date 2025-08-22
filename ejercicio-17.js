//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingresa un texto:");
let vocales = "aeiouAEIOU";
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
    posicion = i;
    break;
    }  
}

if (posicion !== -1) {
    document.write(`La primera vocal está en la posición: ${posicion}`);
} else {
    document.write("No se encontró ninguna vocal.");
}
