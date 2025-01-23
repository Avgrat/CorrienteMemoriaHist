let contadorPuntos = 0;
let DisYPoint = 20;  // Distancia entre cada punto en el eje Y
let puntosRojosX = []; // Arreglo para almacenar las posiciones en X de los puntos rojos

let puntosRojosElements = []; // Arreglo para almacenar las referencias a los elementos de los puntos rojos

let puntoAzul; // Variable para el punto azul

var NumHistory = 1;

// Función para generar un nuevo punto
function generarPunto(posicionX) {
  // Obtener el contenedor
  const contenedor = document.getElementById('histoy-nav');

  // Crear un nuevo div para el punto
  const punto = document.createElement('div');
  punto.classList.add('puntoRojo');

  // Calcular la posición en Y basándonos en el contador y la distancia (100vh)
  const posicionY = contadorPuntos * DisYPoint; // 100vh para cada punto

  // Establecer la posición del punto usando las coordenadas X y Y
  punto.style.left = `${posicionX}vw`; // Posición X recibida
  punto.style.top = `${posicionY}vh`;  // Posición Y calculada

  // Añadir el punto al contenedor
  contenedor.appendChild(punto);

  // Almacenar la posición en X y Y del punto rojo
  puntosRojosX.push(posicionX);

  // Almacenar la referencia al elemento del punto rojo
  puntosRojosElements.push(punto);

  // Incrementar el contador de puntos
  contadorPuntos++;
}

// Llamar a la función generadora de puntos con diferentes posiciones X
// Llamar a la función generadora de puntos con diferentes posiciones X
//caqueta
generarPunto(60); // Llama con X en 50vw
generarPunto(55); // Llama con X en 70vw
generarPunto(50); // Llama con X en 20vw
generarPunto(45); // Llama con X en 50vw
generarPunto(45); // Llama con X en 70vw*/
//putumayo
generarPunto(50); // Llama con X en 50vw
generarPunto(50); // Llama con X en 70vw
generarPunto(55); // Llama con X en 20vw
generarPunto(55); // Llama con X en 50vw
generarPunto(60); // Llama con X en 70vw
//Guaviare
generarPunto(60); // Llama con X en 50vw
generarPunto(40); // Llama con X en 70vw
generarPunto(60); // Llama con X en 20vw
generarPunto(40); // Llama con X en 50vw
generarPunto(60); // Llama con X en 70vw
//baupez
generarPunto(60); // Llama con X en 50vw
generarPunto(60); // Llama con X en 70vw
generarPunto(55); // Llama con X en 20vw
generarPunto(50); // Llama con X en 50vw
generarPunto(45); // Llama con X en 70vw
//AMAZONAS
generarPunto(40); // Llama con X en 50vw
generarPunto(40); // Llama con X en 70vw
generarPunto(40); // Llama con X en 20vw
generarPunto(45); // Llama con X en 50vw
generarPunto(50); // Llama con X en 70vw

// Ajustar la altura total de la sección histoy-nav para que corresponda con el número de puntos generados
const contenedor = document.getElementById('histoy-nav');
contenedor.style.height = `${puntosRojosX.length * DisYPoint}vh`;

// Crear un nuevo div para el punto azul
puntoAzul = document.createElement('div');
puntoAzul.classList.add('puntoAzul');
contenedor.appendChild(puntoAzul); // Añadirlo al contenedor


// Crea un nuevo elemento de imagen
var imagen = document.createElement("img");

// Asigna la clase "barcoimg" a la imagen
imagen.classList.add("barcoimg");

// Asigna la fuente de la imagen (puedes reemplazar la URL por la que desees)
imagen.src = "Assets/IMG/Hitoria/barco1.png";
// Asigna la clase "barco" a la imagen
imagen.className = "barco";

// Agrega la imagen como hijo del elemento "puntoAzul"
puntoAzul.appendChild(imagen);






// Función para actualizar la posición del punto azul con el scroll
function moverPuntoAzul() {
  // Obtener la posición del scroll vertical
  const scrollPosition = window.scrollY;
  const mitadViewport = window.innerHeight / 2;
  const mitadViewport2 = mitadViewport + scrollPosition;

  // Seleccionar el índice del punto rojo que deseas
  const indicePuntoRojo = 0;

  // Obtener la posición absoluta del punto rojo con respecto al documento
  const rect1 = puntosRojosElements[indicePuntoRojo].getBoundingClientRect();  // Devuelve un objeto con la información de la posición
  const rect2 = puntosRojosElements[puntosRojosElements.length - 1].getBoundingClientRect();

  // La propiedad `top` de `getBoundingClientRect()` nos da la distancia desde el borde superior del viewport.
  const primerPuntoY = rect1.top + scrollPosition;
  const segundPuntoY = rect2.top + scrollPosition;


  const poimt1 = mitadViewport2 - primerPuntoY;
  const poimt2 = mitadViewport2 - segundPuntoY;

  if (poimt1 >= 0 && poimt2 <= 0) {
    console.log(NumHistory)
    setElementAbsoluteTop(puntoAzul, mitadViewport2);
    setElementAbsoluteLeft(puntoAzul);
    setElementAbsoluterotate(puntoAzul);
    ChangeText();

  } else {

  }
}

// Escuchar el evento de scroll para mover el punto azul
window.addEventListener('scroll', moverPuntoAzul);




function setElementAbsoluteTop(element, newTop) {
  // Primero, calculamos la posición actual absoluta del elemento
  let rect = element.getBoundingClientRect();
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Calculamos el top absoluto actual
  let currentTop = rect.top + scrollTop;

  // La diferencia entre el `newTop` que queremos y la posición actual
  let offset = newTop - currentTop;

  // Ajustamos la posición del elemento
  element.style.position = "absolute"; // Aseguramos que el elemento esté en posición absoluta
  element.style.top = `${element.offsetTop + offset}px`; // Movemos el elemento al nuevo top


}


function setElementAbsoluteLeft(element) {
  // Obtener la posición del scroll vertical
  const scrollPosition = window.scrollY;
  const mitadViewport = window.innerHeight / 2;
  const mitadViewport2 = mitadViewport + scrollPosition;

  // Buscar el punto rojo más cercano arriba y abajo al punto azul
  let puntoRojoAnterior = null;
  let puntoRojoSiguiente = null;



  for (let i = 0; i < puntosRojosElements.length; i++) {
    NumHistory = i + 1;
    const rect = puntosRojosElements[i].getBoundingClientRect();
    const puntoRojoY = rect.top + scrollPosition;

    // Verificamos si el punto azul está entre el punto rojo anterior y el siguiente
    if (puntoRojoY <= mitadViewport2 && (i === puntosRojosElements.length - 1 || puntosRojosElements[i + 1].getBoundingClientRect().top + scrollPosition >= mitadViewport2)) {
      puntoRojoAnterior = puntosRojosElements[i];
      puntoRojoSiguiente = puntosRojosElements[i + 1] || puntosRojosElements[i];
      break;
    }






  }

  // Si encontramos dos puntos rojos, interpolamos la posición X
  if (puntoRojoAnterior && puntoRojoSiguiente) {
    const rectAnterior = puntoRojoAnterior.getBoundingClientRect();
    const rectSiguiente = puntoRojoSiguiente.getBoundingClientRect();

    // Calcular la interpolación entre las posiciones X de los puntos rojos
    const y1 = rectAnterior.top + scrollPosition;
    const y2 = rectSiguiente.top + scrollPosition;
    const x1 = puntosRojosX[puntosRojosElements.indexOf(puntoRojoAnterior)];
    const x2 = puntosRojosX[puntosRojosElements.indexOf(puntoRojoSiguiente)];

    // Interpolación lineal para la posición X del punto azul
    const t = (mitadViewport2 - y1) / (y2 - y1);
    const interpolacionX = x1 + t * (x2 - x1);

    // Ajustamos la posición X del punto azul
    element.style.left = `${interpolacionX}vw`;
  }
}
function setElementAbsoluterotate(element) {
  // Obtener la posición del scroll vertical
  const scrollPosition = window.scrollY;
  const mitadViewport = window.innerHeight / 2;
  const mitadViewport2 = mitadViewport + scrollPosition;

  // Buscar el punto rojo más cercano arriba y abajo al punto azul
  let puntoRojoAnterior = null;
  let puntoRojoSiguiente = null;

  for (let i = 0; i < puntosRojosElements.length; i++) {
    const rect = puntosRojosElements[i].getBoundingClientRect();
    const puntoRojoY = rect.top + scrollPosition;

    // Verificamos si el punto azul está entre el punto rojo anterior y el siguiente
    if (puntoRojoY <= mitadViewport2 && (i === puntosRojosElements.length - 1 || puntosRojosElements[i + 1].getBoundingClientRect().top + scrollPosition >= mitadViewport2)) {
      puntoRojoAnterior = puntosRojosElements[i];
      puntoRojoSiguiente = puntosRojosElements[i + 1] || puntosRojosElements[i];
      break;
    }


  }

  // Si encontramos un siguiente punto rojo
  if (puntoRojoSiguiente) {

    const rectPuntoAzul = element.getBoundingClientRect();
    const rectPuntoSiguiente = puntoRojoSiguiente.getBoundingClientRect();

    // Calcular las coordenadas absolutas de ambos puntos
    const puntoAzulX = rectPuntoAzul.left + window.scrollX;
    const puntoAzulY = rectPuntoAzul.top + window.scrollY;

    const puntoSiguienteX = rectPuntoSiguiente.left + window.scrollX;
    const puntoSiguienteY = rectPuntoSiguiente.top + window.scrollY;

    // Calcular la diferencia entre las posiciones X y Y de ambos puntos
    const deltaX = puntoSiguienteX - puntoAzulX;
    const deltaY = puntoSiguienteY - puntoAzulY;

    // Calcular el ángulo en radianes entre los dos puntos
    const angle = Math.atan2(deltaY, deltaX) + (Math.PI) / 2;  // En radianes

    // Convertir de radianes a grados
    const angleInDegrees = angle * (180 / Math.PI);

    // Aplicar la rotación al elemento (la imagen) para que apunte hacia el siguiente punto
    element.style.transform = `rotate(${angleInDegrees}deg)`;
  }
}

function ChangeText() {
  switch (NumHistory) {
    case 0:
      document.getElementById("").innerHTML = ""
      break;
    case 1:
      document.getElementById("Titulocaqueta").innerHTML = "Historia1"
      break;
    case 2:
      document.getElementById("Titulocaqueta").innerHTML = "Historia2"
      break;
    case 3:
      document.getElementById("Titulocaqueta").innerHTML = "Historia3"
      break;
    case 4:
      document.getElementById("Titulocaqueta").innerHTML = "Historia4"
      break;
    case 5:
      document.getElementById("Titulocaqueta").innerHTML = "Historia5"
      break;
    case 6:
      document.getElementById("TituloPutumayo").innerHTML = "Historia1"
      break;
    case 7:
      document.getElementById("TituloPutumayo").innerHTML = "Historia2"
      break;
    case 8:
      document.getElementById("TituloPutumayo").innerHTML = "Historia3"
      break;
    case 9:
      document.getElementById("TituloPutumayo").innerHTML = "Historia4"
      break;
    case 10:
      document.getElementById("TituloPutumayo").innerHTML = "Historia5"
      break;
    case 11:
      document.getElementById("TituloGuaviare").innerHTML = ""
      break;
    case 12:
      document.getElementById("TituloGuaviare").innerHTML = ""
      break;
    case 13:
      document.getElementById("TituloGuaviare").innerHTML = "Historia1"
      break;
    case 14:
      document.getElementById("TituloGuaviare").innerHTML = "Historia2"
      break;
    case 15:
      document.getElementById("TituloGuaviare").innerHTML = "Historia3"
      break;
    case 16:
      document.getElementById("TituloBaupez").innerHTML = "Historia4"
      break;
    case 17:
      document.getElementById("TituloBaupez").innerHTML = "Historia5"
      break;
    case 18:
      document.getElementById("TituloBaupez").innerHTML = ""
      break;
    case 19:
      document.getElementById("TituloBaupez").innerHTML = "Historia1"
      break;
    case 20:
      document.getElementById("TituloBaupez").innerHTML = "Historia2"
      break;
    case 21:
      document.getElementById("TituloAmazonas").innerHTML = "Historia3"
      break;
    case 22:
      document.getElementById("TituloAmazonas").innerHTML = "Historia4"
      break;
    case 23:
      document.getElementById("TituloAmazonas").innerHTML = "Historia5"
      break;
    case 24:
      document.getElementById("TituloAmazonas").innerHTML = ""
      break;
    case 25:
      document.getElementById("TituloAmazonas").innerHTML = "Historia1"
      break;
    default:

  }
}
//console.log(puntosRojosX)



