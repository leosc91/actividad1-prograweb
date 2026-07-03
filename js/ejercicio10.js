function convertir() {

    let celsius = document.getElementById('celsius').value;
    
    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor, ingresa un número válido.");
        document.getElementById('fahrenheit').value = "";
    } else {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit + "°F";
    }
}