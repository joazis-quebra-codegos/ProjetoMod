document.addEventListener("DOMContentLoaded", () => {

    const box = document.createElement("div");
    box.id = "magic-box";
    document.body.appendChild(box);

    Object.assign(box.style, {
        position: "fixed",
        width: "50px",
        height: "50px",
        background: "#ffd34d",
        borderRadius: "6px",
        cursor: "pointer",
        zIndex: "999999",
        transition: "top 0.20s ease, left 0.20s ease"
    });

    const savedX = localStorage.getItem("caixaX");
    const savedY = localStorage.getItem("caixaY");

    if (savedX !== null && savedY !== null) {
        box.style.left = savedX;
        box.style.top = savedY;
    } else {
        // posição padrão
        box.style.left = "20px";
        box.style.top = "20px";
    }

    function mover() {
        const maxX = window.innerWidth - box.offsetWidth;
        const maxY = window.innerHeight - box.offsetHeight;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        box.style.left = `${newX}px`;
        box.style.top = `${newY}px`;

        // Salvar posição
        localStorage.setItem("caixaX", `${newX}px`);
        localStorage.setItem("caixaY", `${newY}px`);
    }

    box.addEventListener("click", mover);
});
