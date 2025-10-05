let marco;
let textos = [];
let pantallaActual = 0;
let imagen = [];
let fuente;
let tiempoInicio;
let cantidadDeCirculos = 800;
let tiempoFinal = 0;
let tiempoCreditos = 0;

let rangos = [
    [], [], [0, 0], [2, 3], [5, 6], [8, 9], [11, 14], [16, 17], [19, 20], [22, 24], [26, 27], [29, 30], [32, 35], [37, 38], [40, 43], [45, 48], [50, 51], [53, 54], [56, 57], [59, 61], [63, 65], [67, 69], [71, 76], [78, 79], [81, 82], [84, 85], [87, 88], [90, 94], [96, 98], [100, 102], [104, 107], [109, 112], [114, 118]
];

let titulos = ["", "creditos", "Presents day... present time...", "El Mensaje", "Carta Digital", "Foro de Rumores", "La Luz", "Rastro Digital",
    "Primer Ingreso al Wired", "Contacto Sensorial", "Ruta Lenta", "Encuentro con Chisa",
    "Pasaje Errante", "Interferencia en Casa", "Sueño Lúcido", "Foro Secreto de los Knights",
    "Voces Contradictorias", "Símbolos en el Mundo Real", "Investigación Física",
    "Camino de Expansión", "Nodo Prohibido", "Camino Crítico", "Eiri, el Arquitecto",
    "El Doble", "Retiro Inseguro", "Fusión", "Resistencia Final",
    "Final Divinidad", "Final Humano", "Final Nada",
    "Epílogo Ser Todos", "Epílogo Ser Alguien", "Epílogo No Ser"];

function preload() {
    textos = loadStrings("assets/textos.txt");
    fuente = loadFont("assets/coderscrux.ttf");

    marco = loadImage("assets/imagenes/marco.png");

    imagen[2] = loadImage("assets/imagenes/pantalla0.png");
    imagen[3] = loadImage("assets/imagenes/pantalla1.png");
    imagen[4] = loadImage("assets/imagenes/pantalla2a.png");
    imagen[5] = loadImage("assets/imagenes/pantalla2b.png");
    imagen[6] = loadImage("assets/imagenes/pantalla3a.png");
    imagen[7] = loadImage("assets/imagenes/pantalla3b.png");
    imagen[8] = loadImage("assets/imagenes/pantalla4a.png");
    imagen[9] = loadImage("assets/imagenes/pantalla4b.png");
    imagen[10] = loadImage("assets/imagenes/pantalla4c.png");
    imagen[11] = loadImage("assets/imagenes/pantalla5a.png");
    imagen[12] = loadImage("assets/imagenes/pantalla5b.png");
    imagen[13] = loadImage("assets/imagenes/pantalla5c.png");
    imagen[14] = loadImage("assets/imagenes/pantalla5d.png");
    imagen[15] = loadImage("assets/imagenes/pantalla6a.png");
    imagen[16] = loadImage("assets/imagenes/pantalla6b.png");
    imagen[17] = loadImage("assets/imagenes/pantalla6c.png");
    imagen[18] = loadImage("assets/imagenes/pantalla6d.png");
    imagen[19] = loadImage("assets/imagenes/pantalla7a.png");
    imagen[20] = loadImage("assets/imagenes/pantalla7b.png");
    imagen[21] = loadImage("assets/imagenes/pantalla7c.png");
    imagen[22] = loadImage("assets/imagenes/pantalla8a.png");
    imagen[23] = loadImage("assets/imagenes/pantalla8b.png");
    imagen[24] = loadImage("assets/imagenes/pantalla8c.png");
    imagen[25] = loadImage("assets/imagenes/pantalla9a.png");
    imagen[26] = loadImage("assets/imagenes/pantalla9b.png");
    imagen[27] = loadImage("assets/imagenes/pantalla10a.png");
    imagen[28] = loadImage("assets/imagenes/pantalla10b.png");
    imagen[29] = loadImage("assets/imagenes/pantalla10c.png");
    imagen[30] = loadImage("assets/imagenes/pantalla11a.png");
    imagen[31] = loadImage("assets/imagenes/pantalla11b.png");
    imagen[32] = loadImage("assets/imagenes/pantalla11c.png");
}

function setup() {
    createCanvas(640, 480);
    tiempoInicio = millis();
}

function draw() {
    background(0);

    if (imagen[pantallaActual]) {
        image(imagen[pantallaActual], 0, 0, width, height);
    }

    textFont(fuente);
    textSize(16);
    fill(0);

    if (pantallaActual != 0 && pantallaActual != 1 && pantallaActual != 2) {
        image(marco, 0, 0, 640, 480);
    }
    if (pantallaActual == 1) {
        mostrarCreditos();
    }
    mostrarTextoEnPantalla(pantallaActual);
    mostrarTitulos(pantallaActual);
    decisiones();
    ruidoBlanco();
}

function ruidoBlanco() {
    if (pantallaActual == 0) {
        for (let i = 0; i < cantidadDeCirculos; i++) {
            let x = random(width);
            let y = random(height);
            let gris = random(150, 255);
            fill(gris, random(100, 255));
            let tamaño = random(1, 4);
            ellipse(x, y, tamaño);
        }

        if (millis() - tiempoInicio > 3000) {
            pantallaActual = 1;/*cuenta progresiva desde que empieza hasta que cierra el programa*/
        }
    }
}

function mostrarTitulos(pantalla) {
    let titulo = titulos[pantalla];

    textSize(18);
    text(titulo, width / 2, 20);
}


function mostrarCreditos() {
    console.log(mostrarCreditos);
    fill(255);
    text("zoe ailin", 50, 50);

    if (tiempoCreditos == 0) { /*si tiempo creditos no fue llamado empieza a contar el millis desde aca */
        tiempoCreditos = millis();
    }
    if (millis() - tiempoCreditos > 3000) { /*si pasaron 3 segundos, la pantalla actual se cambio y el tiempo credito vuelve a cero para cuando se reinicie la aventura*/
        pantallaActual = 2;
        tiempoCreditos = 0;
    }
}



function mostrarTextoEnPantalla(pantalla) {
    let rangoDeTextos = rangos[pantalla];
    let x = 29;
    let y = 399;
    let alturaDeLinea = 14;
    let anchoMaximo = width - 29 * 2;

    textAlign(LEFT, TOP);

    for (let i = rangoDeTextos[0]; i <= rangoDeTextos[1]; i++) {
        if (textos[i]) {
            text(textos[i], x, y, anchoMaximo, alturaDeLinea);
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
    if (pantallaActual == 2) {
        dibujarBoton(400, 400, "Comenzar");
    }
    if (pantallaActual == 3) {/*PANTALLA 1: EL MENSAJE*/
        dibujarBoton(510, 400, "Abrir mensaje");
        dibujarBoton(500, 430, "Buscar en foros");

    }
    if (pantallaActual == 4) {/*PANTALLA 2A: CARTA DIGITAL*/
        dibujarBoton(518, 400, "¿Dónde estas?");
        dibujarBoton(530, 430, "Rastrear IP");

    }
    if (pantallaActual == 5) { /*PANTALLA 2B: FORO DE RUMORES*/
        dibujarBoton(501, 400, "Contactar al usuario");
        dibujarBoton(487, 430, "Descargar archivo");

    }
    if (pantallaActual == 6) { /*PANTALLA 3A: LA LUZ*/
        dibujarBoton(504, 400, "Dejarme absorber");
        dibujarBoton(516, 430, "Sentir la luz");

    } if (pantallaActual == 7) { /*PANTALLA 3B: RASTRO DIGITAL*/
        dibujarBoton(150, 400, "Abrir nodo");
        dibujarBoton(400, 430, "Guardar información");

    } if (pantallaActual == 8) { /*PANTALLA 4A: PRIMER INGRESO AL WIRED*/
        dibujarBoton(150, 400, "Seguir la voz de Chisa");
        dibujarBoton(400, 430, "Caminar hacia una luz distante");

    } if (pantallaActual == 9) { /*PANTALLA 4B: CONTACTO SENSORIAL*/
        dibujarBoton(150, 400, "Entrar completamente");
        dibujarBoton(400, 430, "Retirar la mano y volver al cuarto");

    } if (pantallaActual == 10) { /*PANTALLA 4C: RUTA LENTA*/
        dibujarBoton(150, 400, "Anotar el nodo para después");
        dibujarBoton(400, 430, "Dormir y dejar que me invada en sueños");

    } if (pantallaActual == 11) { /*PANTALLA 5A: ENCUENTRO CON CHISA*/
        dibujarBoton(150, 400, "Creerle y avanzar");
        dibujarBoton(400, 430, "Pedir pruebas, cuestionarla");

    } if (pantallaActual == 12) { /*PANTALLA 5B: PASAJE ERRANTE*/
        dibujarBoton(150, 400, "Seguir a un avatar brillante");
        dibujarBoton(400, 430, "Buscar una salida");

    } if (pantallaActual == 13) { /*PANTALLA 5C: INTERFERENCIA EN CASA*/
        dibujarBoton(150, 400, "Revisar el teléfono");
        dibujarBoton(400, 430, "Anotar los símbolos para anotarlos después");

    } if (pantallaActual == 14) { /*PANTALLA 5D: SUEÑO LÚCIDO*/
        dibujarBoton(150, 400, "Seguir los códigos");
        dibujarBoton(400, 430, "Romper el sueño");

    } if (pantallaActual == 15) { /*PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS*/
        dibujarBoton(150, 400, "Preguntar por Eiri");
        dibujarBoton(400, 430, "Solicitar acceso a su servidor oculto");

    } if (pantallaActual == 16) { /*PANTALLA 6B: VOCES CONTRADICTORIAS*/
        dibujarBoton(150, 400, "Seguir a los que prometen libertad");
        dibujarBoton(400, 430, "Seguir a los que advierten peligro");

    } if (pantallaActual == 17) { /*PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL*/
        dibujarBoton(150, 400, "Tocarla");
        dibujarBoton(400, 430, "Dibujarla para investigarla después");

    } if (pantallaActual == 18) { /*PANTALLA 6D: INVESTIGACIÓN FÍSICA*/
        dibujarBoton(150, 400, "Reconstruir el patrón");
        dibujarBoton(400, 430, "Intentar romper el cuaderno");

    } if (pantallaActual == 19) { /*PANTALLA 7A: CAMINO DE EXPANSIÓN*/
        dibujarBoton(150, 400, "Aceptar la invitación");
        dibujarBoton(400, 430, "Exigir saber el precio");

    } if (pantallaActual == 20) { /*PANTALLA 7B: NODO PROHIBIDO*/
        dibujarBoton(150, 400, "Investigar la cámara invisible");
        dibujarBoton(400, 430, "Cerrar todo y respirar");

    } if (pantallaActual == 21) { /*PANTALLA 7C: CAMINO CRÍTICO*/
        dibujarBoton(150, 400, "Responderle");
        dibujarBoton(400, 430, "Silenciarlo y buscar más pruebas");

    } if (pantallaActual == 22) { /*PANTALLA 8A: EIRI, EL ARQUITECTO*/
        dibujarBoton(150, 400, "Aceptar su visión");
        dibujarBoton(400, 430, "Desafiarlo");

    } if (pantallaActual == 23) { /*PANTALLA 8B: EL DOBLE*/
        dibujarBoton(150, 400, "Aceptar que ella soy yo");
        dibujarBoton(400, 430, "Negarla con fuerza");

    } if (pantallaActual == 24) { /*PANTALLA 8C: RETIRO INSEGURO*/
        dibujarBoton(150, 400, "Desconectar todos los dispositivos");
        dibujarBoton(400, 430, "Seguir las voces una última vez");

    } if (pantallaActual == 25) { /*PANTALLA 9A: FUSIÓN*/
        dibujarBoton(150, 370, "Fundirme con todas las voces");
        dibujarBoton(400, 400, "Quedarme en el mundo que duele");
        dibujarBoton(250, 430, "Borrarme para siempre");

    } if (pantallaActual == 26) { /*PANTALLA 9B: RESISTENCIA FINAL*/
        dibujarBoton(500, 370, "Ser todos");
        dibujarBoton(400, 400, "Ser alguien");
        dibujarBoton(250, 430, "No ser");

    } else if (pantallaActual == 27) { /*PANTALLA 10A: FINAL DIVINIDAD*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 30;
            tiempoFinal = 0;
        }

    } else if (pantallaActual == 28) { /*PANTALLA 10B: FINAL HUMANO*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 31;
            tiempoFinal = 0
        }

    } else if (pantallaActual == 29) { /*PANTALLA 10C: FINAL NADA*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 32;
            tiempoFinal = 0
        }
    } else if (pantallaActual == 30) { /*PANTALLA 11A: EPÍLOGO SER TODOS*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 0;
            tiempoFinal = 0

        }
    } else if (pantallaActual == 31) { /*PANTALLA 11B: EPÍLOGO SER ALGUIEN*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 0;
            tiempoFinal = 0


        }
    } else if (pantallaActual == 32) { /*PANTALLA 10C: EPÍLOGO NO SER*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 0;
            tiempoFinal = 0
        }
    }
}



function botonClick(x, y, w, h) {/*función booleana que verifica si el cursor está dentro del boton (x,y,w,h) es true si se hace click*/
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function mousePressed() {
    // PANTALLA 2: MAIN MENU
    if (pantallaActual == 2) {
        if (botonClick(400, 400, 150, 50)) { // "Comenzar" -> EL MENSAJE
            pantallaActual = 3;
            return;
        }
    }

    // PANTALLA 1: EL MENSAJE (3)
    if (pantallaActual == 3) {
        if (botonClick(510, 400, 150, 50)) { // "Abrir mensaje" -> 2A
            pantallaActual = 4;
            return;
        }
        if (botonClick(500, 430, 150, 50)) { // "Buscar en foros" -> 2B
            pantallaActual = 5;
            return;
        }
    }

    // PANTALLA 2A: CARTA DIGITAL (4)
    if (pantallaActual == 4) {
        if (botonClick(518, 400, 150, 50)) { // "¿Dónde estás?" -> 3A (La Luz)
            pantallaActual = 6;
            return;
        }
        if (botonClick(530, 430, 150, 50)) { // "Rastrear IP" -> 3B (Rastro Digital)
            pantallaActual = 7;
            return;
        }
    }

    // PANTALLA 2B: FORO DE RUMORES (5)
    if (pantallaActual == 5) {
        if (botonClick(501, 400, 150, 50)) { // "Contactar al usuario" -> 3B
            pantallaActual = 7;
            return;
        }
        if (botonClick(487, 430, 150, 50)) { // "Descargar archivo" -> 3A
            pantallaActual = 6;
            return;
        }
    }

    // PANTALLA 3A: LA LUZ (6)
    if (pantallaActual == 6) {
        if (botonClick(504, 400, 150, 50)) { // "Dejarme absorber" -> 4A
            pantallaActual = 8;
            return;
        }
        if (botonClick(516, 430, 150, 50)) { // "Sentir la luz" -> 4B
            pantallaActual = 9;
            return;
        }
    }

    // PANTALLA 3B: RASTRO DIGITAL (7)
    if (pantallaActual == 7) {
        if (botonClick(150, 400, 150, 50)) { // "Abrir nodo" -> 4A
            pantallaActual = 8;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Guardar información" -> 4C
            pantallaActual = 10;
            return;
        }
    }

    // PANTALLA 4A: PRIMER INGRESO AL WIRED (8)
    if (pantallaActual == 8) {
        if (botonClick(150, 400, 150, 50)) { // "Seguir la voz de Chisa" -> 5A
            pantallaActual = 11;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Caminar hacia una luz distante" -> 5B
            pantallaActual = 12;
            return;
        }
    }

    // PANTALLA 4B: CONTACTO SENSORIAL (9)
    if (pantallaActual == 9) {
        if (botonClick(150, 400, 150, 50)) { // "Entrar completamente" -> 5A
            pantallaActual = 11;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Retirar la mano..." -> 5C
            pantallaActual = 13;
            return;
        }
    }

    // PANTALLA 4C: RUTA LENTA (10)
    if (pantallaActual == 10) {
        if (botonClick(150, 400, 150, 50)) { // "Anotar el nodo..." -> 5C
            pantallaActual = 13;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Dormir..." -> 5D
            pantallaActual = 14;
            return;
        }
    }

    // PANTALLA 5A: ENCUENTRO CON CHISA (11)
    if (pantallaActual == 11) {
        if (botonClick(150, 400, 150, 50)) { // "Creerle y avanzar" -> 6A
            pantallaActual = 15;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Pedir pruebas..." -> 6B
            pantallaActual = 16;
            return;
        }
    }

    // PANTALLA 5B: PASAJE ERRANTE (12)
    if (pantallaActual == 12) {
        if (botonClick(150, 400, 150, 50)) { // "Seguir a un avatar brillante" -> 6B
            pantallaActual = 16;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Buscar una salida" -> 6C
            pantallaActual = 17;
            return;
        }
    }

    // PANTALLA 5C: INTERFERENCIA EN CASA (13)
    if (pantallaActual == 13) {
        if (botonClick(150, 400, 150, 50)) { // "Revisar el teléfono" -> 6C
            pantallaActual = 17;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Anotar los símbolos..." -> 6D
            pantallaActual = 18;
            return;
        }
    }

    // PANTALLA 5D: SUEÑO LÚCIDO (14)
    if (pantallaActual == 14) {
        if (botonClick(150, 400, 150, 50)) { // "Seguir los códigos" -> 6A
            pantallaActual = 15;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Romper el sueño" -> 6C
            pantallaActual = 17;
            return;
        }
    }

    // PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS (15)
    if (pantallaActual == 15) {
        if (botonClick(150, 400, 150, 50)) { // "Preguntar por Eiri" -> 7A
            pantallaActual = 19;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Solicitar acceso..." -> 7B
            pantallaActual = 20;
            return;
        }
    }

    // PANTALLA 6B: VOCES CONTRADICTORIAS (16)
    if (pantallaActual == 16) {
        if (botonClick(150, 400, 150, 50)) { // "Seguir a los que prometen libertad" -> 7A
            pantallaActual = 19;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Seguir a los que advierten peligro" -> 7C
            pantallaActual = 21;
            return;
        }
    }

    // PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL (17)
    if (pantallaActual == 17) {
        if (botonClick(150, 400, 150, 50)) { // "Tocarla" -> 7B
            pantallaActual = 20;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Dibujarla..." -> 7C
            pantallaActual = 21;
            return;
        }
    }

    // PANTALLA 6D: INVESTIGACIÓN FÍSICA (18)
    if (pantallaActual == 18) {
        if (botonClick(150, 400, 150, 50)) { // "Reconstruir el patrón" -> 7C
            pantallaActual = 21;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Intentar romper el cuaderno" -> 7B
            pantallaActual = 20;
            return;
        }
    }

    // PANTALLA 7A: CAMINO DE EXPANSIÓN (19)
    if (pantallaActual == 19) {
        if (botonClick(150, 400, 150, 50)) { // "Aceptar la invitación" -> 8A
            pantallaActual = 22;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Exigir saber el precio" -> 8B
            pantallaActual = 23;
            return;
        }
    }

    // PANTALLA 7B: NODO PROHIBIDO (20)
    if (pantallaActual == 20) {
        if (botonClick(150, 400, 150, 50)) { // "Investigar la cámara invisible" -> 8B
            pantallaActual = 23;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Cerrar todo y respirar" -> 8C
            pantallaActual = 24;
            return;
        }
    }

    // PANTALLA 7C: CAMINO CRÍTICO (21)
    if (pantallaActual == 21) {
        if (botonClick(150, 400, 150, 50)) { // "Responderle" -> 8B
            pantallaActual = 23;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Silenciarlo..." -> 8C
            pantallaActual = 24;
            return;
        }
    }

    // PANTALLA 8A: EIRI, EL ARQUITECTO (22)
    if (pantallaActual == 22) {
        if (botonClick(150, 400, 150, 50)) { // "Aceptar su visión" -> 9A
            pantallaActual = 25;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Desafiarlo" -> 9B
            pantallaActual = 26;
            return;
        }
    }

    // PANTALLA 8B: EL DOBLE (23)
    if (pantallaActual == 23) {
        if (botonClick(150, 400, 150, 50)) { // "Aceptar que ella soy yo" -> 9A
            pantallaActual = 25;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Negarla con fuerza" -> 9B
            pantallaActual = 26;
            return;
        }
    }

    // PANTALLA 8C: RETIRO INSEGURO (24)
    if (pantallaActual == 24) {
        if (botonClick(150, 400, 150, 50)) { // "Desconectar todos los dispositivos" -> 9B
            pantallaActual = 26;
            return;
        }
        if (botonClick(400, 430, 150, 50)) { // "Seguir las voces una última vez" -> 9A
            pantallaActual = 25;
            return;
        }
    }

    // PANTALLA 9A: FUSIÓN (25)
    if (pantallaActual == 25) {
        if (botonClick(150, 370, 150, 50)) { // "Fundirme con todas las voces" -> Final Divinidad
            pantallaActual = 27;
            return;
        }
        if (botonClick(400, 400, 150, 50)) { // "Quedarme..." -> Final Humano
            pantallaActual = 28;
            return;
        }
        if (botonClick(250, 430, 150, 50)) { // "Borrarme para siempre" -> Final Nada
            pantallaActual = 29;
            return;
        }
    }

    // PANTALLA 9B: RESISTENCIA FINAL (26)
    if (pantallaActual == 26) {
        if (botonClick(500, 370, 150, 50)) { // "Ser todos" -> Final Divinidad
            pantallaActual = 27;
            return;
        }
        if (botonClick(400, 400, 150, 50)) { // "Ser alguien" -> Final Humano
            pantallaActual = 28;
            return;
        }
        if (botonClick(250, 430, 150, 50)) { // "No ser" -> Final Nada
            pantallaActual = 29;
            return;
        }
    }
}


