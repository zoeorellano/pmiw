function mousePressed() {
    /*PANTALLA 0: PORTADA*/
    if (pantallaActual == 0) {
        if (botonClick(400, 400, 150, 50)) {/*COMENZAR > PANTALLA 1*/
            pantallaActual = 1;
            return;
        }
        if (botonClick(400, 430, 150, 50)) {/*CRÉDITOS > PANTALLA CREDITOS*/
            pantallaActual = 28;
            return;
        }
    }
    /*PANTALLA 1: EL MENSAJE*/

    else if (pantallaActual == 1) {
        if (botonClick(510, 400, 150, 50)) {/*ABRIR MENSAJE > PANTALLA 2A*/
            pantallaActual = 2;
            return;
        }
        if (botonClick(500, 430, 150, 50)) {/*BUSCAR EN FOROS SOBRE CHISA > PANTALLA 2B*/
            pantallaActual = 3;
            return;
        }
    }
    /*PANTALLA 2A: CARTA DIGITAL*/

    else if (pantallaActual == 2) {
        if (botonClick(510, 400, 150, 50)) {/*RESPONDER > PANTALLA 3A*/
            pantallaActual = 4;
            return;
        }
        if (botonClick(500, 430, 150, 50)) {/*RASTREAR IP DEL MENSAJE > PANTALLA 3B*/
            pantallaActual = 5;
            return;
        }
    }
    /*PANTALLA 2B: FORO DE RUMORES*/

    else if (pantallaActual == 3) {
        if (botonClick(510, 400, 150, 50)) {/*CONTACTAR AL USUARIO > PANTALLA 3B*/
            pantallaActual = 5;
            return;
        }
        if (botonClick(50, 430, 150, 50)) {/*DESCARGAR ARCHIVO > PANTALLA 3A*/
            pantallaActual = 4;
            return;
        }
    }
    /*PANTALLA 3A: LA LUZ*/

    else if (pantallaActual == 4) {
        if (botonClick(505, 400, 150, 50)) {/*DEJARME ABSORBER > PANTALLA 4A*/
            pantallaActual = 6;
            return;
        }
        if (botonClick(520, 430, 150, 50)) {/*EXTENDER MANO > PANTALLA 4B*/
            pantallaActual = 7;
            return;
        }
    }
    /*PANTALLA 3B: RASTRO DIGITAL*/

    else if (pantallaActual == 5) {
        if (botonClick(150, 380, 150, 50)) {/*ABRIR EL NODO A LA FUERZA > PANTALLA 4A*/
            pantallaActual = 6;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*GUARDAR LA INFORMACIÓN > PANTALLA 4C*/
            pantallaActual = 8;
            return;
        }
    }
    /*PANTALLA 4A: PRIMER INGRESO AL WIRED*/

    else if (pantallaActual == 6) {
        if (botonClick(150, 380, 150, 50)) {/*SEGUIR LA VOZ DE CHISA > PANTALLA 5A*/
            pantallaActual = 9;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*CAMINAR HACIA LA LUZ > PANTALLA 5B*/
            pantallaActual = 10;
            return;
        }
    }
    /*PANTALLA 4B: CONTACTO SENSORIAL*/

    else if (pantallaActual == 7) {
        if (botonClick(150, 380, 150, 50)) {/*ENTRAR COMPLETAMENTE > PANTALLA 5A*/
            pantallaActual = 9;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*RETIRAR LA MANO > PANTALLA 5C*/
            pantallaActual = 11;
            return;
        }
    }
    /*PANTALLA 4C: RUTA LENTA*/

    else if (pantallaActual == 8) {
        if (botonClick(150, 380, 150, 50)) {/*ANOTAR EL NODO > PANTALLA 5C*/
            pantallaActual = 11;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*DORMIR > PANTALLA 5D*/
            pantallaActual = 12;
            return;
        }
    }
    /*PANTALLA 5A: ENCUENTRO CON CHISA*/

    else if (pantallaActual == 9) {
        if (botonClick(150, 380, 150, 50)) {/*CREERLE > PANTALLA 6A*/
            pantallaActual = 13;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*PEDIR PRUEBAS > PANTALLA 6B*/
            pantallaActual = 14;
            return;
        }
    }
    /*PANTALLA 5B: PASAJE ERRANTE*/

    else if (pantallaActual == 10) {
        if (botonClick(150, 380, 150, 50)) {/*SEGUIR AVATAR > PANTALLA 6B*/
            pantallaActual = 14;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*BUSCAR SALIDA > PANTALLA 6C*/
            pantallaActual = 15;
            return;
        }
    }
    /*PANTALLA 5C: INTERFERENCIA EN CASA*/

    else if (pantallaActual == 11) {
        if (botonClick(150, 380, 150, 50)) {/*REVISAR TELÉFONO > PANTALLA 6C*/
            pantallaActual = 15;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*ANOTAR SÍMBOLOS > PANTALLA 6D*/
            pantallaActual = 16;
            return;
        }
    }
    /*PANTALLA 5D: SUEÑO LÚCIDO*/

    else if (pantallaActual == 12) {
        if (botonClick(150, 380, 150, 50)) {/*SEGUIR CÓDIGOS > PANTALLA 6A*/
            pantallaActual = 13;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*ROMPER SUEÑO > PANTALLA 6C*/
            pantallaActual = 15;
            return;
        }
    }
    /*PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS*/

    else if (pantallaActual == 13) {
        if (botonClick(150, 380, 150, 50)) {/*PREGUNTAR POR EIRI > PANTALLA 7A*/
            pantallaActual = 17;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*ACCESO A SERVIDOR > PANTALLA 7B*/
            pantallaActual = 18;
            return;
        }
    }
    /*PANTALLA 6B: VOCES CONTRADICTORIAS*/

    else if (pantallaActual == 14) {
        if (botonClick(150, 380, 150, 50)) {/*SEGUIR A LOS QUE PROMETEN LIBERTAD > PANTALLA 7A*/
            pantallaActual = 17;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*SEGUIR A LOS QUE ADVIERTEN PELIGRO > PANTALLA 7C*/
            pantallaActual = 19;
            return;
        }
    }
    /*PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL*/

    else if (pantallaActual == 15) {
        if (botonClick(150, 380, 150, 50)) {/*TOCARLA > PANTALLA 7B*/
            pantallaActual = 18;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*DIBUJARLA > PANTALLA 7C*/
            pantallaActual = 19;
            return;
        }
    }
    /*PANTALLA 6D: INVESTIGACIÓN FÍSICA*/

    else if (pantallaActual == 16) {
        if (botonClick(150, 380, 150, 50)) {/*RECONSTRUIR EL PATRÓN > PANTALLA 7C*/
            pantallaActual = 19;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*ROMPER CUADERNO > PANTALLA 7B*/
            pantallaActual = 18;
            return;
        }
    }
    /*PANTALLA 7A: CAMINO DE EXPANSIÓN*/

    else if (pantallaActual == 17) {
        if (botonClick(150, 380, 150, 50)) {/*ACEPTAR LA INVITACIÓN > PANTALLA 8A*/
            pantallaActual = 20;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*EXIGIR PRECIO > PANTALLA 8B*/
            pantallaActual = 21;
            return;
        }
    }
    /*PANTALLA 7B: NODO PROHIBIDO*/

    else if (pantallaActual == 18) {
        if (botonClick(150, 380, 150, 50)) {/*INVESTIGAR CÁMARA > PANTALLA 8B*/
            pantallaActual = 21;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*CERRAR TODO > PANTALLA 8C*/
            pantallaActual = 22;
            return;
        }
    }
    /*PANTALLA 7C: CAMINO CRÍTICO*/

    else if (pantallaActual == 19) {
        if (botonClick(150, 380, 150, 50)) {/*RESPONDER > PANTALLA 8B*/
            pantallaActual = 21;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*SILENCIARLO > PANTALLA 8C*/
            pantallaActual = 22;
            return;
        }
    }
    /*PANTALLA 8A: EIRI, EL ARQUITECTO*/

    else if (pantallaActual == 20) {
        if (botonClick(150, 380, 150, 50)) {/*ACEPTAR > PANTALLA 9A*/
            pantallaActual = 23;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*DESAFIAR > PANTALLA 9B*/
            pantallaActual = 24;
            return;
        }
    }
    /*PANTALLA 8B: EL DOBLE*/

    else if (pantallaActual == 21) {
        if (botonClick(150, 380, 150, 50)) {/*ACEPTAR QUE SOY YO > PANTALLA 9A*/
            pantallaActual = 23;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*NEGARLA > PANTALLA 9B*/
            pantallaActual = 24;
            return;
        }
    }
    /*PANTALLA 8C: RETIRO INSEGURO*/

    else if (pantallaActual == 22) {
        if (botonClick(150, 380, 150, 50)) {/*DESCONECTAR DISPOSITIVOS > PANTALLA 9B*/
            pantallaActual = 24;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*SEGUIR VOCES > PANTALLA 9A*/
            pantallaActual = 23;
            return;
        }
    }
    /*PANTALLA 9A: FUSIÓN*/

    else if (pantallaActual == 23) {
        if (botonClick(150, 380, 150, 50)) {/*FUNDIRME > PANTALLA 10A*/
            pantallaActual = 25;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*QUEDARME > PANTALLA 10B*/
            pantallaActual = 26;
            return;
        }
        if (botonClick(250, 380, 150, 50)) {/*BORRARME > PANTALLA 10C*/
            pantallaActual = 27;
            return;
        }
    }
    /*PANTALLA 9B: RESISTENCIA FINAL*/

    else if (pantallaActual == 24) {
        if (botonClick(150, 380, 150, 50)) {/*SER TODOS > PANTALLA 10A*/
            pantallaActual = 25;
            return;
        }
        if (botonClick(400, 380, 150, 50)) {/*SER ALGUIEN > PANTALLA 10B*/
            pantallaActual = 26;
            return;
        }
        if (botonClick(250, 380, 150, 50)) {/*NO SER > PANTALLA 10C*/
            pantallaActual = 27;
            return;
        }
    }

    /*PANTALLA 10A: FINAL DIVINIDAD*/

    else if (pantallaActual == 25) {
        if (botonClick(500, 380, 150, 50)) {/*FINAL DIVINIDAD > PANTALLA 11A*/
            pantallaActual = 28;
            return;
        }
    }
    /*PANTALLA 10B: FINAL HUMANO*/

    else if (pantallaActual == 26) {
        if (botonClick(245, 380, 150, 50)) {/*FINAL HUMANO > PANTALLA 11B*/
            pantallaActual = 29;
            return;
        }
    }
    /*PANTALLA 10C: FINAL NADA*/

    else if (pantallaActual == 27) {
        if (botonClick(245, 380, 150, 50)) {/*FINAL NADA > PANTALLA 11C*/
            pantallaActual = 30;
            return;
        }
    }
    /*PANTALLA 11A-11B-11C: EPÍLOGOS*/

    else if (pantallaActual >= 28 && pantallaActual <= 30) {
        if (botonClick(width / 2 - 75, 380, 150, 50)) {/*EPÍLOGOS > PANTALLA 0: PORTADA*/
            pantallaActual = 0;
            return;
        }
    }
}

