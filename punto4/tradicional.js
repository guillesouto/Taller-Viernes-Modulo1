/*
PROBLEMA: QUI-GON JINN está encargado de revisar n sables
de luz y contabilizar la cantidad de energía de sables que tienen
negativa en Joules.
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
defectuosos con energía negativa fue de 2 sables.
*/
let sables=[2,5,-6,1,87,64,-5,-50,10]
let constante=0

sables.forEach(function(sable){
    if(sable<0){
        constante ++
        console.log(`El sable de luz con carga negativa es: ${sable}`)
    }
})
console.log(`Los sables con carga negativa son: ${constante}`)