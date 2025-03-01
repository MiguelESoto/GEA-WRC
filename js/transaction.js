function registrar() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();

    if (!nombre || !apellido || !correo || !contraseña) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("apellido", apellido);
    formData.append("correo", correo);
    formData.append("contraseña", contraseña);

    fetch("registro.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("mensaje").innerText = data;
    })
    .catch(error => console.error("Error:", error));
}

function iniciarSesion() {
    let correo = document.getElementById("correo_login").value.trim();
    let contraseña = document.getElementById("contraseña_login").value.trim();

    if (!correo || !contraseña) {
        alert("Ingrese su correo y contraseña.");
        return;
    }

    let formData = new FormData();
    formData.append("correo", correo);
    formData.append("contraseña", contraseña);

    fetch("login.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("mensaje").innerText = `Bienvenido, ${data.nombre} ${data.apellido}`;
        } else {
            document.getElementById("mensaje").innerText = data.message;
        }
    })
    .catch(error => console.error("Error:", error));
}


