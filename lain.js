class Lain {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.vida = 5;
        this.maxVida = 5;
        this.rayo = new Rayo(this.posX, this.posY, rayoLain);

        this.electrocutada = false;
        this.timerElectrocutada = 0;

        this.muerta = false;
        this.timerDesaparecer = 0;
        this.movimientoActualLain = lainQuieta;
        this.lainCorreDerecha = false;
        this.lainCorreIzquierda = false;
        this.lainLanzaRayo = false;
    }

    dibujar() {

        if (this.muerta) {
            if (this.timerDesaparecer > 0) {
                if (frameCount % 12 < 6) {
                    image(electricidad1, this.posX, this.posY, 100, 140);
                } else {
                    image(electricidad2, this.posX, this.posY, 100, 140);
                }
                image(lainMuere, this.posX, this.posY, 90, 90);
                this.timerElectrocutada--;
            }
            return;
        }

        if (this.electrocutada) {
            if (this.timerElectrocutada % 12 < 6) {
                image(electricidad1, this.posX, this.posY, 100, 140);
            } else {
                image(electricidad2, this.posX, this.posY, 100, 140);
            }
            image(lainMuere, this.posX, this.posY, 90, 90);

            this.timerElectrocutada--;
            if (this.timerElectrocutada <= 0) {
                this.electrocutada = false;
            }
            return;
        } else if (this.vida > 0) {
            image(this.movimientoActualLain, this.posX, this.posY, 90, 90);
            this.rayo.dibujar();
        }
    }


    recibirRayo() {
        if (this.electrocutada || this.vida <= 0) return;
        this.vida--;
        this.electrocutada = true;
        this.timerElectrocutada = 30;

        if (this.vida <= 0) {
            this.morir();
        }
    }

    morir() {
        this.muerta = true;
        this.lainCorreDerecha = false;
        this.lainCorreIzquierda = false;
        this.lainLanzaRayo = false;
        this.timerDesaparecer = 60;
    }
    lainDisparoRayo() {
        return this.rayo.electrocutar;
    }

    dispararRayo() {
        if (this.electrocutada || this.muerta) return;

        this.rayo = new Rayo(this.posX, this.posY, rayoLain);
        this.rayo.velocidad = -7;
        this.rayo.disparar();
    }

    actualizar() {
        if (this.muerta) return;

        if (!this.electrocutada) {

            if (this.lainCorreDerecha) {
                this.posX += 3;
            }
            if (this.lainCorreIzquierda) {
                this.posX -= 3;
            }
        }

        if (this.lainLanzaRayo) {
            this.movimientoActualLain = lainLanzaRayo;
        }
        else if (this.lainCorreIzquierda) {
            this.movimientoActualLain = lainCorreIzquierda;
        } else if (this.lainCorreDerecha) {
            this.movimientoActualLain = lainCorreDerecha;
        } else {
            this.movimientoActualLain = lainQuieta;
        }
    }

    keyPressed(keyCode) {
        if (this.muerta || this.electrocutada) return;

        if (keyCode == LEFT_ARROW) {
            this.lainCorreIzquierda = true;
            this.movimientoActualLain = lainCorreIzquierda;

        } else if (keyCode == RIGHT_ARROW) {
            this.lainCorreDerecha = true;
            this.movimientoActualLain = lainCorreDerecha;

        } else if (keyCode == 90) {
            this.lainLanzaRayo = true;
            this.movimientoActualLain = lainLanzaRayo;
            this.dispararRayo();
        }
    }

    keyReleased(keyCode) {
        if (keyCode == LEFT_ARROW) {
            this.lainCorreIzquierda = false;
        }
        if (keyCode == RIGHT_ARROW) {
            this.lainCorreDerecha = false;
        }
        if (keyCode == 90) {
            this.lainLanzaRayo = false;
        }
    }
}