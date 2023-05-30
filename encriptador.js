// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una 
//   palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

/*-----------Funcion encriptar---------------*/
function encriptar() {/*tolowerCase convierte el texto en minusculas*/ 
    let texto = document.getElementById("textArea").value.toLowerCase();
    element = document.getElementById("imagen");
    /* se guarda en la variable texto*/
    /*element.src = src = "img/haker.jpg"*/;
/*Se ordena de esta manera e,o,i,a,u para que la repeticion
de letras en el resultado no afecte a la conversion*/ 
/* -/letra/  para que revise todas las letras indicadas
   - img = i para que afecte las mayusculas y ninusculas, g  para tosala
   linea de la oracio y m  para que afecte multiples lineas de parrafo*/
     texArea = texto.replace(/e/img, "enter");
     /* Se cabia la variable para que reemplacesolo lo que esta en 
     la variable txtAreay no lo que ya se cambio */
     texArea = texArea.replace(/o/img, "ober");
     texArea = texArea.replace(/i/img, "imes");
     texArea = texArea.replace(/a/img, "ai");
     texArea = texArea.replace(/u/img, "ufat");

/* para que desaparezca la imagen de la derecha */
     document.getElementById("imagen").style.display = "none";
 /* para que desaparezca la imagen de la derecha */  
    document.getElementById("h3-encontrado").style.display = "none"; 
/*para que en lugar del texto aparezca lo que esta guardado en la 
    variable texArea(texto cifrado) */
    document.getElementById("textoDesencriptado").innerHTML = texArea;
 /* para que aparezca el boton de Copiar */   
    document.getElementById("boton-copiar").style.display = "show";
    /* para que ocupe su lugar el boton de Copiar */
    document.getElementById("boton-copiar").style.display = "inherit";
    

}
/*-----------Funcion Desencriptar---------------*/
function desencriptar() {
    let texto = document.getElementById("textArea").value.toLowerCase();
    /*element = document.getElementById("imagen");*/
    /*element.src = src = "img/hacker-2.jpg";*/

     texArea = texto.replace(/enter/img, "e");
     texArea = texArea.replace(/ober/img, "o");
     texArea = texArea.replace(/imes/img, "i");
     texArea = texArea.replace(/ai/img, "a");
     texArea = texArea.replace(/ufat/img, "u");


    /*document.getElementById("textoDesencriptado").innerHTML = texArea;*/
    /*document.getElementById("boton-copiar").style.display = "show";*/
    /*document.getElementById("boton-copiar").style.display = "inherit";*/

/* para que desaparezca la imagen de la derecha */
document.getElementById("imagen").style.display = "none";
/* para que desaparezca la imagen de la derecha */  
   document.getElementById("h3-encontrado").style.display = "none"; 
/*para que en lugar del texto aparezca lo que esta guardado en la 
   variable texArea(texto cifrado) */
   document.getElementById("textoDesencriptado").innerHTML = texArea;
/* para que aparezca el boton de Copiar */   
   document.getElementById("boton-copiar").style.display = "show";
   /* para que ocupe su lugar el boton de Copiar */
   document.getElementById("boton-copiar").style.display = "inherit";
   
}
/*-----------Funcion Copiar---------------*/
function copy() {/* selecciona el contenodo del texto */
    let contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");  /* corta el texto */
    alert("Texto copiado");
}

/*-----------Funcion borrar ---------------*/

function borrarTexto() {
    let borrar = document.getElementById("textArea", "textoDesencriptado").value = "";
    borrar = document.getElementById("textoDesencriptado").value = "";
    borrar = document.getElementById("h3-encontrado").value = "show";
    document.location.reload();


}