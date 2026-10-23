
function mostrarMensaje(modulo) {
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent =
        "Has seleccionado el módulo de " + modulo +
        ". Próximamente podrás gestionar sus registros.";
}
