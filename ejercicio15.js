let estudiantes = [];
let posicion = 0;

function agregar() {
    let nom = document.getElementById("nombre").value;
    let cal = document.getElementById("calificacion").value;

    if (nom === "" || cal === "") {
        alert("Datos incompletos");
        return;
    }

    estudiantes[posicion] = { nombre: nom, calificacion: Number(cal) };
    posicion = posicion + 1;

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcular() {
    let suma = estudiantes.reduce((tot, e) => tot + e.calificacion, 0);
    document.getElementById("promedio").value = suma / estudiantes.length;

    let max = Math.max(...estudiantes.map(e => e.calificacion));
    let min = Math.min(...estudiantes.map(e => e.calificacion));

    estudiantes.forEach(e => {
        if (e.calificacion === max) {
            document.getElementById("mejor").value = e.nombre;
        }
        if (e.calificacion === min) {
            document.getElementById("peor").value = e.nombre;
        }
    });
}