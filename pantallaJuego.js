class PantallaJuego {
    constructor(administrador) {
        this.administrador = administrador;
        this.objJuego = new Juego(this.administrador);

        this.estado = 0; // 0: jugando, 1: pausa muerte, 2: game over texto, 3: game over botón, 4: final
        this.tiempoEstado = 0;
        this.amt = 0;
        this.colorA = color(paletaDeColores[0]);
        this.colorB = color(paletaDeColores[1]);
        this.fondoAnimado = this.colorA;
        this.botonX = width / 2;
        this.botonY = height - 80;
        this.botonAncho = 350;
        this.botonAlto = 50;
        this.puntos = [];
        this.textoMuerta = ['NO', 'ESTOY', 'MUERTA'];
        this.indiceTextoActual = 0;

        this.textosCreditos = [
            "Basado en la serie:\n'SERIAL EXPERIMENTS LAIN'\n\n" + "Producción y co-creación:\nYasuyuki Ueda\n\n" + "Guion: Chiaki J. Konaka\n" + "Director: Ryutaro Nakamura\n" + "Ilustrador: Yoshitoshi ABe",

            "Música:\n\n" +
            "Juego: 'wanna hotel'\n" +
            "Créditos: 'buenisimo'\n\n" +
            "Ambas por Juana Rozas",

            'FACULTAD DE ARTES - DEPARTAMENTO DE DISEÑO MULTIMEDIAL'
        ];
        
        this.duracionesCreditos = [5000, 5000, 5000];
        this.indiceCreditos = 0;
        this.tiempoCreditos = 0;
        this.duracionGifFinal = 5000;
    }

    iniciarMuerte() {
        this.estado = 1;
        this.tiempoEstado = millis();
        this.indiceTextoActual = 0;

        if (wannaHotel && wannaHotel.isPlaying()) {
            wannaHotel.stop();
        }
        if (buenisimo) {
            buenisimo.stop();
            buenisimo.play();
        }
    }

    iniciarFinal() {
        this.estado = 4;
        this.tiempoEstado = millis();
        this.indiceCreditos = 0;
        this.tiempoCreditos = 0;
        if (wannaHotel && wannaHotel.isPlaying()) {
            wannaHotel.stop();
        }
        if (buenisimo && !buenisimo.isPlaying()) buenisimo.play();
    }

    actualizarTextoMuerta() {
        let textoActual = this.textoMuerta[this.indiceTextoActual];
        let limites = fuente2.textBounds(textoActual, 0, 0, 100);

        this.puntos = fuente2.textToPoints(textoActual, 0, 0, 100, { sampleFactor: 0.15 });
        for (let i = 0; i < this.puntos.length; i++) {
            this.puntos[i].x += width / 2 - limites.w / 2;
            this.puntos[i].y += height / 2;
        }
    }

    actualizar() {
        //MUERTE
        if (this.estado === 0) {
            this.amt += 0.01;
            if (this.amt > 1) this.amt = 0;
            this.fondoAnimado = gradienteAnimado(this.amt, this.colorA, this.colorB);
            this.objJuego.actualizar();

        } else if (this.estado === 1) {
            //  NO ESTOY MUERTA
            if (millis() - this.tiempoEstado > 2000) {
                this.estado = 2;
                this.tiempoEstado = millis();
                this.indiceTextoActual = 0;
                this.actualizarTextoMuerta();
            }

        } else if (this.estado === 2) {
            //NO ESTOY MUERTA ROTO
            if (millis() - this.tiempoEstado > 2000) {
                this.indiceTextoActual++;
                this.tiempoEstado = millis();
                if (this.indiceTextoActual >= this.textoMuerta.length) {
                    this.estado = 3;

                } else {
                    this.actualizarTextoMuerta();
                }
            }

        } else if (this.estado === 4) {
            //GIF
            if (millis() - this.tiempoEstado > this.duracionGifFinal) {
                this.estado = 5;
                this.tiempoCreditos = millis();
                this.indiceCreditos = 0;
            }

        } else if (this.estado === 5) {
            ///CREDS
            if (millis() - this.tiempoCreditos > this.duracionesCreditos[this.indiceCreditos]) {

                this.indiceCreditos++;
                this.tiempoCreditos = millis();
                if (this.indiceCreditos >= this.textosCreditos.length) {
                    this.estado = 6;
                }
            }
        }

    }



    dibujar() {
        if (this.estado === 0) {
            background(this.fondoAnimado);
            image(fondo, width / 2, height / 2, width, height);
            this.objJuego.dibujar();
        } else if (this.estado === 1) {

            // pausa con gradiente
            this.fondoAnimado = gradienteAnimado(this.amt, this.colorA, this.colorB);
            background(this.fondoAnimado);
            image(fondo, width / 2, height / 2, width, height);
            this.objJuego.dibujar();
        } else if (this.estado === 2) {

            // NO ESTOY MUERTA
            background(0);
            stroke(255);
            strokeWeight(2);
            noFill();

            beginShape();

            for (let i = 0; i < this.puntos.length; i++) {
                let p = this.puntos[i];
                let desplazamientoY;
                let romperTexto = (this.indiceTextoActual === this.textoMuerta.length - 1 && millis() - this.tiempoEstado > 1000);
                if (romperTexto) {
                    let amplitud = 30;
                    let frecuencia = 1.99;
                    let velocidad = 0.0098;
                    let ondaTangente = tan(p.x * frecuencia + frameCount * velocidad);
                    desplazamientoY = map(ondaTangente, -1, 1, -amplitud, amplitud);
                } else {
                    let amplitud = 30;
                    let frecuencia = 0.0125;
                    let velocidad = 0.033;
                    let ruido = noise(p.x * frecuencia + frameCount * velocidad);
                    desplazamientoY = map(ruido, 0, 1, -amplitud, amplitud);
                }
                vertex(p.x, p.y + desplazamientoY);
            }
            endShape();

        }

        else if (this.estado === 3) {
            // game over lain pierde
            background(0);
            image(gifOver1, width / 2, height / 2 - 20, 300, 230);
            let hover = (mouseX > this.botonX - this.botonAncho / 2 && mouseX < this.botonX + this.botonAncho / 2 && mouseY > this.botonY - this.botonAlto / 2 && mouseY < this.botonY + this.botonAlto / 2);
            if (hover) {
                fill(0, 255, 0);
                cursor(HAND);
            } else {
                fill(255);
                cursor(ARROW);
            }
            noStroke();
            textSize(30);
            textAlign(CENTER, CENTER);
            text('REINTENTAR CONEXIÓN', this.botonX, this.botonY);
        }

        else if (this.estado === 4) {
            background(0);
            image(gifOver2, width / 2, height / 2, width, height);
        }

        else if (this.estado === 5) {
            background(0);
            fill(255);
            textFont(fuente1);
            textSize(24);
            textAlign(CENTER, CENTER);
            if (this.indiceCreditos < this.textosCreditos.length) {
                text(this.textosCreditos[this.indiceCreditos], width / 2, height / 2);
            }
        }
        else if (this.estado == 6) {
            background(0);
            fill(255);
            textFont(fuente1);
            textSize(24);
            textAlign(CENTER, CENTER);

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
            textSize(30);
            textAlign(CENTER, CENTER);
            text("REINICIAR CONEXION", this.botonX, this.botonY);
        }

    }

    mousePressed() {
        console.log("this.estado ===6");

        if (this.estado === 3) {

            if (mouseX > this.botonX - this.botonAncho / 2 && mouseX < this.botonX + this.botonAncho / 2 && mouseY > this.botonY - this.botonAlto / 2 && mouseY < this.botonY + this.botonAlto / 2) {

                if (buenisimo && buenisimo.isPlaying()) {
                    buenisimo.stop();
                }
                if (wannaHotel) {
                    wannaHotel.stop();

                    if (wannaHotel.loop) {
                        wannaHotel.loop();

                    } else {
                        wannaHotel.play();
                    }
                }
                this.administrador.reiniciarSoloJuego();
            }
        }

        else if (this.estado == 6) {
            if (mouseX > this.botonX - this.botonAncho / 2 && mouseX < this.botonX + this.botonAncho / 2 && mouseY > this.botonY - this.botonAlto / 2 && mouseY < this.botonY + this.botonAlto / 2) {


                if (buenisimo && buenisimo.isPlaying()) {
                    buenisimo.stop();
                }
                this.administrador.cambiarPantalla(1);
                cursor(ARROW);
            }
        }
    }

    keyPressed(keyCode) {
        if (this.estado === 0) {
            this.objJuego.keyPressed(keyCode);
        }
    }
    keyReleased(keyCode) {
        if (this.estado === 0) {
            this.objJuego.keyReleased(keyCode);
        }
    }

}