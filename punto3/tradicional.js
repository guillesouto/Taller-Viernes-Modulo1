/*
3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día 
*/

let temperaturasDias=[
    {maxima:24, minima:15, dia:1},
    {maxima:30, minima:14, dia:2},
    {maxima:26, minima:14, dia:3},
    {maxima:19, minima:10, dia:4},
    {maxima:20, minima:9, dia:5},
]

temperaturasDias.forEach(function(temperatura){
    console.log(`El promedio del dia ${temperatura.dia}, es ${(temperatura.maxima+temperatura.minima)/2}`)
})