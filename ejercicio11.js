function convertir() {

    let kilometros = document.getElementById('kilometros').value;
    
    if (kilometros === "" || isNaN(kilometros)) {
        alert("Ingresa un número válido.");
        document.getElementById('millas').value = "";

    }else if (kilometros <= 0) {
            alert("Ingresa un número positivo.");
            document.getElementById('millas').value = "";

    } else {
        let millas = (kilometros * 0.621371);
        document.getElementById('millas').value = millas;
    }
}
