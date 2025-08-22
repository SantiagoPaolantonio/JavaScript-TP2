//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

//1
//22
//333
//4444
//55555
//666666
//…….

let i = 1;

while (i <= 30) {
    let linea = ""
    for(let j = 1; j <= i; j++){
        linea += i
    }
    document.write(`<br> ${linea}`)
    i++
}
