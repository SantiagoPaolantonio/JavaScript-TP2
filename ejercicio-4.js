//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numeros = 0
let continuar;

do {
    
    const num = +prompt("Escribe un numero")

    if(isNaN(num)){
        alert("Por favor ingresa un numero valido")
    } else{
        numeros += num
    }

    continuar = confirm("¿Quieres seguir escribiendo numeros para sumarlos?")


} while (continuar);

document.write("La suma total es: " + numeros)