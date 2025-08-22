//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = +prompt("Ingrese su edad")

if (isNaN(edad)){
    document.write("Por favor ingrese un numero valido")
} else if (edad >= 18){
    document.write(`usted tiene ${edad} años, puede conducir`)
} else {
    document.write("Usted no puede conducir ")
}