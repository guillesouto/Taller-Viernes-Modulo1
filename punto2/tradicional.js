/*
2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn
*/
function obtenerNombre(codigo){
    let nombre = codigo.split(":")[1]
    return nombre
}

let resultado1=obtenerNombre("ARQ2555:Sara Bel-Sun")
let resultado2=obtenerNombre("ARQ2556:Nodin Chavdri")
let resultado3=obtenerNombre("ARQ2557:Finn")

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)