document.getElementById("boton").addEventListener("click", function() {
    
  
    let metododebusqueda = document.querySelector('input[name="entrega"]:checked')?.value;

    if (!metododebusqueda) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    localStorage.setItem("metododebusqueda", metododebusqueda);

    if (metododebusqueda === "Rastrear por nombre") {
        window.location.href = "nombre.html";
    } else if (metododebusqueda === "Rastrear por placas") {
        window.location.href = "placa.html";
    }
});