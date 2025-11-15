class PantallaIntro {
    constructor(administrador) {
        this.administrador = administrador;
        this.tiempoInicio = 0;
        this.estado = 0;
        this.duracionLogo = 3000;
    }

    actualizar() {
        if (this.tiempoInicio == 0) {
            this.tiempoInicio = millis();
        }
            if (this.estado === 0 && millis() - this.tiempoInicio > this.duracionLogo) {
                this.estado = 1
                this.tiempoInicio = millis();
            }
            if (this.estado === 1 && millis() - this.tiempoInicio > 8000) {
                this.administrador.cambiarPantalla(1);

            }
        
    }

    dibujar() {
        if (this.estado === 0) {
            background(0)
            noStroke()
            
            for (let y = 0; y < logoLain.height; y += 3) {
                for (let x = 0; x < logoLain.width; x += 3) {
                    let c = logoLain.get(x, y)
                    let b = brightness(c)

                    if (b > 30) {
                        let posX = map(x, 0, logoLain.width, 0, width)
                        let posY = map(y, 0, logoLain.height, 0, height)

                        if (random(1) > 0.1) {
                            fill(255, random(160, 200))
                            rect(posX, posY, 4, 3)
                        }
                    }
                }
            }
        } else {
            background(0)
            fill(255)
            textFont(fuente2)
            textSize(20)
            textAlign(CENTER, CENTER)

            let t = millis() - this.tiempoInicio

            if (t < 2000) {
                text("PROGRAMACION PARA MEDIOS INTERACTIVOS WEB", width / 2, height / 2)
            }

            else if (t < 4000) {
                text("COMISION DOS", width / 2, height / 2)
            }

            else if (t < 6000) {
                text("DOCENTE - MATIAS JAUREGUI LORDA", width / 2, height / 2)
            }

            else if (t < 8000) {
                text("TRABAJO REALIZADO POR - ZOE ORELLANO", width / 2, height / 2)
            }
        }
    }
    mousePressed() { };
    keyPressed() { };
    keyReleased() { };
}
