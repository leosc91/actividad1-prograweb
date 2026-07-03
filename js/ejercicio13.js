function convertir() {

    let edad = document.getElementById('edad').value;
   
    if (edad === "" || isNaN(edad)) {
        alert("Ingresa una edad válida.");
        document.getElementById('edad').value = "";

    }else if (edad <= 17) {
            document.getElementById('resultado').value = "No puedes votar";

    } else  {
        document.getElementById('resultado').value = "Puedes votar";
    }
}
