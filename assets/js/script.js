
const poster = document.getElementById('custom-poster');
const btnTrigger = document.getElementById('btn-trigger');
const btnClose = document.getElementById('btn-close');
const model = document.getElementById('clima-model');

// ACCIÓN: ABRIR
btnTrigger.addEventListener('click', (e) => {
  e.preventDefault(); // Evitamos cualquier comportamiento raro
  poster.classList.add('hidden'); // Quitamos el poster de en medio
  btnClose.style.display = 'block'; // Mostramos el botón de cerrar
  model.style.zIndex = "150"; // Pasamos el modelo al frente de todo

  // Forzamos al modelo a despertar
  if (model.dismissPoster) model.dismissPoster();

  console.log("Abriendo modelo...");
});

// ACCIÓN: CERRAR
btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  poster.classList.remove('hidden'); // Volvemos a poner el poster al frente
  btnClose.style.display = 'none';   // Escondemos el botón de cerrar
  model.style.zIndex = "10";         // Mandamos el modelo al fondo

  console.log("Cerrando modelo...");
});