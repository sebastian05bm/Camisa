// Esperar que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const cursos = document.querySelectorAll(".curso");

  cursos.forEach((curso) => {
    curso.addEventListener("click", function () {
      const titulo = this.querySelector("h3").textContent;
      alert(`Has seleccionado el ${titulo}`);
    });
  });
});
