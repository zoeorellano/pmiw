class PantallaMenu {
    constructor(administrador) {
        this.administrador = administrador;
        this.estado = 0;
        this.botonX = width / 2;
        this.botonY = height - 120;
        this.botonAncho = 300;
        this.botonAlto = 50;

        this.tiempoInicio = 0;
        this.duracionCarga = 4000;
        this.anchoBarra = 400;
        this.altoBarra = 20;
        this.xBarra = (width - this.anchoBarra) / 2;
        this.yBarra = height / 2 + 20;
        this.anchoActual = 0;

        this.indice = 0;
        this.velocidad = 100;
        this.letras = 0;

        this.duraciones = [8000, 7000, 10000];
        this.indiceIntro = 0;
        this.textosIntro = [
            "INICIANDO CONEXIÓN\nSE HA DETECTADO SU UBICACIÓN EN EL WIRED.\nENTORNO ESTABLE.",
            "Eiri Masami, el autoproclamado Dios del Wired,\nte está esperando."
        ];
        this.textoActual = this.textosIntro[this.indice];

        this.duracionesIntro = [8000, 7000];
        this.textoActualIntro = this.textosIntro[this.indiceIntro];
    }
    actualizar() {
        if (this.estado === 1) {

            if (this.tiempoInicio === 0) {
                this.tiempoInicio = millis();
            }
            this.letras = floor((millis() - this.tiempoInicio) / this.velocidad);
            this.letras = constrain(this.letras, 0, this.textoActualIntro.length);

            if (millis() - this.tiempoInicio > this.duracionesIntro[this.indiceIntro]) {
                this.indiceIntro++;
                this.tiempoInicio = millis();

                if (this.indiceIntro < this.textosIntro.length) {
                    this.textoActualIntro = this.textosIntro[this.indiceIntro];
                    this.letras = 0;
                }
            }
        } else if (this.estado === 2) {
            if (this.tiempoInicio === 0) {
                this.tiempoInicio = millis();
            }
            this.anchoActual = map(millis() - this.tiempoInicio, 0, this.duracionCarga, 0, this.anchoBarra);
            if (millis() - this.tiempoInicio >= this.duracionCarga) {
                this.administrador.reiniciarSoloJuego();
            }
        }
    }

    dibujar() {
        background(0);

        if (this.estado === 0) {
            image(gifMenu, width / 2, height / 2 - 20, 300, 230);
            let hover = (mouseX > this.botonX - this.botonAncho / 2 && mouseX < this.botonX + this.botonAncho / 2 && mouseY > this.botonY - this.botonAlto / 2 && mouseY < this.botonY + this.botonAlto / 2);
            if (hover) {
                fill(0, 255, 0);
                cursor(HAND);
            } else {
                fill(255);
                cursor(ARROW);
            }
            noStroke();
            textFont(fuente2);
            textSize(25);
            textAlign(CENTER, CENTER);
            text("ACEPTAR CONEXION", this.botonX, this.botonY);

        } else if (this.estado === 1) {
            background(0);

            if (this.indiceIntro < this.textosIntro.length) {

                let textoParcial = this.textoActualIntro.slice(0, this.letras);

                fill(255);
                textFont(fuente1);
                textLeading(35);
                textSize(20);
                textAlign(CENTER, TOP);
                image(introGif2, width / 2, height / 2 - 50, 300, 230);
                text(textoParcial, width / 2, height / 2 + 100);
                cursor(ARROW);

            } else {
                fill(255);
                textFont(fuente1);
                textLeading(35);
                textSize(20);
                textAlign(CENTER, CENTER);
                text("Eiri no te va a dejar ir.\nFLECHAS: Usalas para esquivar sus rayos de datos.\nTECLA Z: Presionala para contraatacar.", width / 2, height / 2 - 60);
                let hover2 = (mouseX > this.botonX - this.botonAncho / 2 && mouseX < this.botonX + this.botonAncho / 2 && mouseY > this.botonY - this.botonAlto / 2 && mouseY < this.botonY + this.botonAlto / 2);
                if (hover2) {
                    fill(0, 255, 0);
                    cursor(HAND);
                } else {
                    fill(255);
                    cursor(ARROW);
                }
                textFont(fuente2);
                textSize(25);
                textAlign(CENTER, CENTER);
                text("ENFRENTARLO", this.botonX, this.botonY);
            }
        } else if (this.estado === 2) {
            cursor(ARROW);
            fill(255);
            textFont(fuente1);
            textSize(30);
            textAlign(CENTER, CENTER);
            text("CARGANDO...", width / 2, height / 2 - 40);
            fill(50);
            noStroke();
            rectMode(CORNER);
            rect(this.xBarra, this.yBarra, this.anchoBarra, this.altoBarra);
            fill(255);
            rect(this.xBarra, this.yBarra, this.anchoActual, this.altoBarra);
            imageMode(CENTER);
        }
    }

    reiniciar() {
        this.estado = 0;
        this.tiempoInicio = 0;
        this.letras = 0;
        this.anchoActual = 0;
        this.indiceIntro = 0;
        this.textoActualIntro = this.textosIntro[this.indiceIntro];
    }

    mousePressed() {

        if (soniditos){
            soniditos.play();
        }
        if (this.estado === 0) {
            if (mouseX > this.botonX - this.botonAncho / 2 && mouseX < this.botonX + this.botonAncho / 2 && mouseY > this.botonY - this.botonAlto / 2 && mouseY < this.botonY + this.botonAlto / 2) {
                this.estado = 1;
                this.indiceIntro = 0;
                this.tiempoInicio = 0;
                this.letras = 0;
                this.textoActualIntro = this.textosIntro[this.indiceIntro];
            }
        } else if (this.estado === 1) {
            if (this.indiceIntro >= this.textosIntro.length) {
                if (mouseX > this.botonX - this.botonAncho / 2 && mouseX < this.botonX + this.botonAncho / 2 && mouseY > this.botonY - this.botonAlto / 2 && mouseY < this.botonY + this.botonAlto / 2) {

                    if(soniditos){
                        soniditos.stop();
                    }
                    if (wannaHotel && !wannaHotel.isPlaying()) {
                        if (wannaHotel.loop) {
                            wannaHotel.loop();
                        } else {
                            wannaHotel.play();
                        }
                    }
                    this.estado = 2;
                    this.tiempoInicio = 0;
                    this.anchoActual = 0;
                }
            }
        }
    }

    keyPressed() { }
    keyReleased() { }
}