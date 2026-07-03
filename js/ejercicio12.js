function convertir() {

    let MXN = document.getElementById('MXN').value;
    
    if (MXN === "" || isNaN(MXN)) {
        alert("Ingresa un número válido.");
        document.getElementById('USD').value = "";

    } else {
        let USD = (MXN * 0.055).toFixed(2);
        document.getElementById('USD').value = USD;
    }
}
