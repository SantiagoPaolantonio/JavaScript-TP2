

/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let cadenaTexto = ""

let continuar;

do {

    let texto = prompt("Escribe cadenas de texto")

    if(cadenaTexto !== ""){

        cadenaTexto += "-"

    }

    cadenaTexto += texto

    continuar = confirm("¿Quieres seguir escribiendo para concatenar?")

} while (continuar);

document.write(cadenaTexto)


