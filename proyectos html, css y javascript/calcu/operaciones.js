function operar(operacion) {
    // Obtener los valores de los inputs
    let N1 = parseFloat(document.getElementById('num1').value);
    let N2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    // Verificar que los valores no sean NaN
    if (isNaN(N1) || isNaN(N2)) {
        document.getElementById('resultado').innerText = "Error: Ingrese números válidos";
        return;
    }

    // Realizar la operación
    switch (operacion) {
        case '+':
            resultado = N1 + N2;
            break;
        case '-':
            resultado = N1 - N2;
            break;
        case '*':
            resultado = N1 * N2;
            break;
        case '/':
            if (N2 === 0) {
                resultado = "Error: División por 0";
            } else {
                resultado = N1 / N2;
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerText = resultado;
}
