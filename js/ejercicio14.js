function ordenar() {
    let inNumeros = document.getElementById("numeros").value.trim();

    if (inNumeros === "") {
        alert("Introduce números");
        return;
    }

    let arreglo = inNumeros.split(",");
    let convertidor = arreglo.map(Number);

    let max = Math.max(...convertidor);
    let min = Math.min(...convertidor);
    let suma = convertidor.reduce((acc, valor) => acc + valor, 0);
    
    let pro = suma / convertidor.length; 

    document.getElementById("maximo").value = max;
    document.getElementById("minimo").value = min;
    document.getElementById("promedio").value = pro;
}