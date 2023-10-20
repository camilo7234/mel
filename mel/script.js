// Obtenemos el botón "No" por su ID
const btnNo = document.getElementById("btn-no");

// Función para mover el botón "No" aleatoriamente
function moveButtonRandomly() {
    const maxX = window.innerWidth - btnNo.clientWidth;
    const maxY = window.innerHeight - btnNo.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
}

// Agregamos un evento de clic al botón "No"
btnNo.addEventListener("click", moveButtonRandomly);
