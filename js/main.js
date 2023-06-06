const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    
    if (boton.id === "c" || boton.id === "ce") {
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      pantalla.textContent = pantalla.textContent.slice(0, -1) || "0";
      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch (error) {
        pantalla.textContent = "Error!";
      }
      return;
    }

    if (botonApretado === "x²") {
      const numero = parseFloat(pantalla.textContent);
      pantalla.textContent = Math.pow(numero, 2);
      return;
    }

    if (botonApretado === "√") {
      const numero = parseFloat(pantalla.textContent);
      pantalla.textContent = Math.sqrt(numero);
      return;
    }

    if (botonApretado === "1/x") {
      const numero = parseFloat(pantalla.textContent);
      pantalla.textContent = 1 / numero;
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});
