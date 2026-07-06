const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'No se puede dividir por cero';

const calcularOperacion = (operacion) => {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(num1) || isNaN(num2)) {
        return Swal.fire('Error', 'Ingresa números', 'error'); 
    }

    let resultado;

    if (operacion === 'suma'){ 
        resultado = sumar(num1, num2);
    }
    else if (operacion === 'resta'){
        resultado = restar(num1, num2);
    }
    else if (operacion === 'multiplicacion'){ 
        resultado = multiplicar(num1, num2);
    }
    else if (operacion === 'division'){ 
        resultado = dividir(num1, num2);
    }
    document.getElementById("resultado").value = resultado;
};