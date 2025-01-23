
var nombre = "";
var rango = "";
var text = "";
function mostrarAlerta(circuloId) {  

    var video = document.getElementById('relatosVideo');
    var videoSource = document.getElementById('videoSourceTestimonios');

    
    switch (circuloId) {
        case 0:
           
        break;
        case 1:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "nombre1"
            rango = "rango1"
            text = "lorelorelorelorelorelorelorelorelorelorelorelore";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 2:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "nombre2"
            rango = "rango2"
            text = "lorelorelorelorelorelorelorelorelorelorelorelore";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 3:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "nombre3"
            rango = "rango3"
            text = "lorelorelorelorelorelorelorelorelorelorelorelore";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 4:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "nombre4"
            rango = "rango1"
            text = "lorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelorelore";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 5:
            
        break;
        case 6:
        
        break;

        default:        
            
        }

        document.getElementById("relatosNombre").innerHTML = nombre;
        document.getElementById("relatosRango").innerHTML = rango;
        document.getElementById("relatosText").innerHTML = text;
          // Volver a cargar el video con la nueva fuente
  video.load();
  video.play();
}
