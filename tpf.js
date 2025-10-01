let marco;
let textos = [];
let pantallaActual = 0;
let imagen = [];
let fuente;

function preload() {
    textos = loadStrings("assets/textos.txt");
    fuente = loadFont("assets/coderscrux.ttf");

    marco = loadImage("assets/imagenes/marco.png");

    imagen[0] = loadImage("assets/imagenes/pantalla0.png");
    imagen[1] = loadImage("assets/imagenes/pantalla1.png");
    imagen[2] = loadImage("assets/imagenes/pantalla2a.png");
    imagen[3] = loadImage("assets/imagenes/pantalla2b.png");
    imagen[4] = loadImage("assets/imagenes/pantalla3a.png");
    imagen[5] = loadImage("assets/imagenes/pantalla3b.png");
    imagen[6] = loadImage("assets/imagenes/pantalla4a.png");
    imagen[7] = loadImage("assets/imagenes/pantalla4b.png");
    imagen[8] = loadImage("assets/imagenes/pantalla4c.png");
    imagen[9] = loadImage("assets/imagenes/pantalla5a.png");
    imagen[10] = loadImage("assets/imagenes/pantalla5b.png");
    imagen[11] = loadImage("assets/imagenes/pantalla5c.png");
    imagen[12] = loadImage("assets/imagenes/pantalla5d.png");
    imagen[13] = loadImage("assets/imagenes/pantalla6a.png");
    imagen[14] = loadImage("assets/imagenes/pantalla6b.png");
    imagen[15] = loadImage("assets/imagenes/pantalla6c.png");
    imagen[16] = loadImage("assets/imagenes/pantalla6d.png");
    imagen[17] = loadImage("assets/imagenes/pantalla7a.png");
    imagen[18] = loadImage("assets/imagenes/pantalla7b.png");
    imagen[19] = loadImage("assets/imagenes/pantalla7c.png");
    imagen[20] = loadImage("assets/imagenes/pantalla8a.png");
    imagen[21] = loadImage("assets/imagenes/pantalla8b.png");
    imagen[22] = loadImage("assets/imagenes/pantalla8c.png");
    imagen[23] = loadImage("assets/imagenes/pantalla9a.png");
    imagen[24] = loadImage("assets/imagenes/pantalla9b.png");
    imagen[25] = loadImage("assets/imagenes/pantalla10a.png");
    imagen[26] = loadImage("assets/imagenes/pantalla10b.png");
    imagen[27] = loadImage("assets/imagenes/pantalla10c.png");
    imagen[28] = loadImage("assets/imagenes/pantalla11a.png");
    imagen[29] = loadImage("assets/imagenes/pantalla11b.png");
    imagen[30] = loadImage("assets/imagenes/pantalla11c.png");
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);

    if (imagen[pantallaActual]) {
        image(imagen[pantallaActual], 0, 0, width, height);
    }

    textFont(fuente);
    textSize(16);
    fill(0);

    if (pantallaActual != 0) {
        image(marco, 0, 0, 640, 480);
    }


    mostrarTextoEnPantalla(pantallaActual);
    decisiones();

}

function mostrarTextoEnPantalla(pantalla) { /*asigna el rango de líneas del arreglo textos que se muestra en cada pantalla*/
    console.log(textos);
    let primeraLinea = 0;
    let ultimaLinea = 118;

    if (pantalla == 0) {
        primeraLinea = 0;
        ultimaLinea = 0;
    }
    else if (pantalla == 1) {
        primeraLinea = 2;
        ultimaLinea = 3;
    }
    else if (pantalla == 2) {
        primeraLinea = 5;
        ultimaLinea = 6;
    }
    else if (pantalla == 3) {
        primeraLinea = 8;
        ultimaLinea = 9;
    }
    else if (pantalla == 4) {
        primeraLinea = 11;
        ultimaLinea = 14;
    }
    else if (pantalla == 5) {
        primeraLinea = 16;
        ultimaLinea = 17;
    }
    else if (pantalla == 6) {
        primeraLinea = 19;
        ultimaLinea = 20;
    }
    else if (pantalla == 7) {
        primeraLinea = 22;
        ultimaLinea = 24;
    }
    else if (pantalla == 8) {
        primeraLinea = 26;
        ultimaLinea = 27;
    }
    else if (pantalla == 9) {
        primeraLinea = 29;
        ultimaLinea = 30;
    }
    else if (pantalla == 10) {
        primeraLinea = 32;
        ultimaLinea = 35;
    }
    else if (pantalla == 11) {
        primeraLinea = 37;
        ultimaLinea = 38;
    }
    else if (pantalla == 12) {
        primeraLinea = 40;
        ultimaLinea = 43;
    }
    else if (pantalla == 13) {
        primeraLinea = 45;
        ultimaLinea = 48;
    }
    else if (pantalla == 14) {
        primeraLinea = 50;
        ultimaLinea = 51;
    }
    else if (pantalla == 15) {
        primeraLinea = 53;
        ultimaLinea = 54;
    }
    else if (pantalla == 16) {
        primeraLinea = 56;
        ultimaLinea = 57;
    }
    else if (pantalla == 17) {
        primeraLinea = 59;
        ultimaLinea = 61;
    }
    else if (pantalla == 18) {
        primeraLinea = 63;
        ultimaLinea = 65;
    }
    else if (pantalla == 19) {
        primeraLinea = 67;
        ultimaLinea = 69;
    }
    else if (pantalla == 20) {
        primeraLinea = 71;
        ultimaLinea = 76;
    }
    else if (pantalla == 21) {
        primeraLinea = 78;
        ultimaLinea = 79;
    }
    else if (pantalla == 22) {
        primeraLinea = 81;
        ultimaLinea = 82;
    }
    else if (pantalla == 23) {
        primeraLinea = 84;
        ultimaLinea = 85;
    }
    else if (pantalla == 24) {
        primeraLinea = 87;
        ultimaLinea = 88;
    }
    else if (pantalla == 25) {
        primeraLinea = 90;
        ultimaLinea = 94;
    }
    else if (pantalla == 26) {
        primeraLinea = 96;
        ultimaLinea = 98;
    }
    else if (pantalla == 27) {
        primeraLinea = 100;
        ultimaLinea = 102;
    }
    else if (pantalla == 28) {
        primeraLinea = 104;
        ultimaLinea = 107;
    }
    else if (pantalla == 29) {
        primeraLinea = 109;
        ultimaLinea = 112;
    }
    else if (pantalla == 30) {
        primeraLinea = 114;
        ultimaLinea = 118;
    }

    let x = 29;
    let y = 399;
    let alturaDeLinea = 10;
    let anchoMaximo = width - 29 * 2;

    textAlign(LEFT, TOP);

    for (let i = primeraLinea; i <= ultimaLinea; i++) {/*se usa un for para dibujar cada linea con text() y va bajando eje y con altura de linea para la siguiente */
        if (textos[i]) {
            text(textos[i], x, y, anchoMaximo, alturaDeLinea); /*dibuja el texto dentro de un rectangulo de texto que hace wrap*/
            y += alturaDeLinea;
        }
    }
}

function dibujarBoton(x, y, textos) {
    let paddingX = 20;
    let paddingY = 10;

    let w = textWidth(textos) + paddingX;
    let h = paddingY + 10;


    fill(255);
    rect(x, y, w, h, 10);

    fill(0);
    textAlign(CENTER, CENTER); /*decisiones*/
    text(textos, x + w / 2, y + h / 2);/*aca modificar la posicion de los botones*/
    textAlign(LEFT, CENTER);/*narrativa*/
}

function decisiones() {
    if (pantallaActual == 0) {
        dibujarBoton(400 , 400, "Comenzar");
        dibujarBoton(400, 430, "Créditos");

    } else if (pantallaActual == 1) {/*PANTALLA 1: EL MENSAJE*/
        dibujarBoton(510, 400, "Abrir mensaje");
        dibujarBoton(500, 430, "Buscar en foros");

    } else if (pantallaActual == 2) {/*PANTALLA 2A: CARTA DIGITAL*/
        dibujarBoton(518, 400, "¿Dónde estas?");
        dibujarBoton(530, 430, "Rastrear IP");

    } else if (pantallaActual == 3) { /*PANTALLA 2B: FORO DE RUMORES*/
        dibujarBoton(501, 400, "Contactar al usuario");
        dibujarBoton(487, 430, "Descargar archivo");

    } else if (pantallaActual == 4) { /*PANTALLA 3A: LA LUZ*/
        dibujarBoton(504, 400, "Dejarme absorber");
        dibujarBoton(516, 430, "Sentir la luz");

    } else if (pantallaActual == 5) { /*PANTALLA 3B: RASTRO DIGITAL*/
        dibujarBoton(150, 400, "Abrir nodo");
        dibujarBoton(400, 430, "Guardar información");

    } else if (pantallaActual == 6) { /*PANTALLA 4A: PRIMER INGRESO AL WIRED*/
        dibujarBoton(150, 400, "Seguir la voz de Chisa");
        dibujarBoton(400, 430, "Caminar hacia una luz distante");

    } else if (pantallaActual == 7) { /*PANTALLA 4B: CONTACTO SENSORIAL*/
        dibujarBoton(150, 400, "Entrar completamente");
        dibujarBoton(400, 430, "Retirar la mano y volver al cuarto");

    } else if (pantallaActual == 8) { /*PANTALLA 4C: RUTA LENTA*/
        dibujarBoton(150, 400, "Anotar el nodo para después");
        dibujarBoton(400, 430, "Dormir y dejar que me invada en sueños");

    } else if (pantallaActual == 9) { /*PANTALLA 5A: ENCUENTRO CON CHISA*/
        dibujarBoton(150, 400, "Creerle y avanzar");
        dibujarBoton(400, 430, "Pedir pruebas, cuestionarla");

    } else if (pantallaActual == 10) { /*PANTALLA 5B: PASAJE ERRANTE*/
        dibujarBoton(150, 400, "Seguir a un avatar brillante");
        dibujarBoton(400, 430, "Buscar una salida");

    } else if (pantallaActual == 11) { /*PANTALLA 5C: INTERFERENCIA EN CASA*/
        dibujarBoton(150, 400, "Revisar el teléfono");
        dibujarBoton(400, 430, "Anotar los símbolos para anotarlos después");

    } else if (pantallaActual == 12) { /*PANTALLA 5D: SUEÑO LÚCIDO*/
        dibujarBoton(150, 400, "Seguir los códigos");
        dibujarBoton(400, 430, "Romper el sueño");

    } else if (pantallaActual == 13) { /*PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS*/
        dibujarBoton(150, 400, "Preguntar por Eiri");
        dibujarBoton(400, 430, "Solicitar acceso a su servidor oculto");

    } else if (pantallaActual == 14) { /*PANTALLA 6B: VOCES CONTRADICTORIAS*/
        dibujarBoton(150, 400, "Seguir a los que prometen libertad");
        dibujarBoton(400, 430, "Seguir a los que advierten peligro");

    } else if (pantallaActual == 15) { /*PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL*/
        dibujarBoton(150, 400, "Tocarla");
        dibujarBoton(400, 430, "Dibujarla para investigarla después");

    } else if (pantallaActual == 16) { /*PANTALLA 6D: INVESTIGACIÓN FÍSICA*/
        dibujarBoton(150, 400, "Reconstruir el patrón");
        dibujarBoton(400, 430, "Intentar romper el cuaderno");

    } else if (pantallaActual == 17) { /*PANTALLA 7A: CAMINO DE EXPANSIÓN*/
        dibujarBoton(150, 400, "Aceptar la invitación");
        dibujarBoton(400, 430, "Exigir saber el precio");

    } else if (pantallaActual == 18) { /*PANTALLA 7B: NODO PROHIBIDO*/
        dibujarBoton(150, 400, "Investigar la cámara invisible");
        dibujarBoton(400, 430, "Cerrar todo y respirar");

    } else if (pantallaActual == 19) { /*PANTALLA 7C: CAMINO CRÍTICO*/
        dibujarBoton(150, 400, "Responderle");
        dibujarBoton(400, 430, "Silenciarlo y buscar más pruebas");

    } else if (pantallaActual == 20) { /*PANTALLA 8A: EIRI, EL ARQUITECTO*/
        dibujarBoton(150, 400, "Aceptar su visión");
        dibujarBoton(400, 430, "Desafiarlo");

    } else if (pantallaActual == 21) { /*PANTALLA 8B: EL DOBLE*/
        dibujarBoton(150, 400, "Aceptar que ella soy yo");
        dibujarBoton(400, 430, "Negarla con fuerza");

    } else if (pantallaActual == 22) { /*PANTALLA 8C: RETIRO INSEGURO*/
        dibujarBoton(150, 400, "Desconectar todos los dispositivos");
        dibujarBoton(400, 430, "Seguir las voces una última vez");

    } else if (pantallaActual == 23) { /*PANTALLA 9A: FUSIÓN*/
        dibujarBoton(150, 370, "Fundirme con todas las voces");
        dibujarBoton(400, 400, "Quedarme en el mundo que duele");
        dibujarBoton(250, 430, "Borrarme para siempre");

    } else if (pantallaActual == 24) { /*PANTALLA 9B: RESISTENCIA FINAL*/
        dibujarBoton(500, 370, "Ser todos");
        dibujarBoton(400, 400, "Ser alguien");
        dibujarBoton(250, 430, "No ser");

    } else if (pantallaActual == 25) { /*PANTALLA 10A: FINAL DIVINIDAD*/
        dibujarBoton(500, 400, "Ser todos");

    } else if (pantallaActual == 26) { /*PANTALLA 10B: FINAL HUMANO*/
        dibujarBoton(150, 400, "Ser alguien");

    } else if (pantallaActual == 27) { /*PANTALLA 10C: FINAL NADA*/
        dibujarBoton(150, 400, "No ser");

    } else if (pantallaActual == 28) { /*PANTALLA 11A: EPÍLOGO SER TODOS*/
        dibujarBoton(500, 400, "Ser todos");

    } else if (pantallaActual == 29) { /*PANTALLA 11B: EPÍLOGO SER ALGUIEN*/
        dibujarBoton(150, 400, "Ser alguien");

    } else if (pantallaActual == 30) { /*PANTALLA 10C: EPÍLOGO NO SER*/
        image(imagen[pantallaActual], 0, 0, width, height);
    }
}


function botonClick(x, y, w, h) {/*función booleana que verifica si el cursor está dentro del boton (x,y,w,h) es true si se hace click*/
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

