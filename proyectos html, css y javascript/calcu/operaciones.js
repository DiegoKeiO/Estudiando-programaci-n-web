let N1, N2

const sumar = (num1, num2)=>{
    return parseInt(num1 + num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1 - num2);
}

const multiplicar = (num1, num2)=>{
    return parseInt(num1 * num2);
}

const dividir = (num1, num2)=>{
    return parseInt(num1 / num2);
}

if(button = "+"){
    resultado = sumar(N1, N2);
}
else if(button = "-"){
    resultado = restar(N1, N2);
}
else if(button = "*"){
    resultado = multiplicar(N1, N2);
}
else if(button = "/"){
    resultado = dividir(N1, N2);
}
else{
    document.write("ERROR!")
}

document.write(resultado);