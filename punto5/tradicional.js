/*
PROBLEMA: Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
licencia de software vendida menos el 5% de deducciones por
impuestos. Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado
*/
// 5% de salario 175000

function calcular(salario,comision,numeroVentas){
    return salario + (comision * numeroVentas) - (175000)
}

let salario=calcular(4700000,1200000,4)
console.log(`El salario total del empleado es: ${salario}bwag`)