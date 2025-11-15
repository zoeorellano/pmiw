class Eiri {
    constructor() {
        /*atributos que pertenecen a la clase*/
        this.posX = 640 / 2;
        this.posY = 480 / 5;
        this.vida = 5;
        this.maxVida = 5;
        this.rayo = new Rayo(this.posX, this.posY, rayoEiri);
        this.tiempo = 0;
        this.intervalo = 70;
        this.rafagaRestante = 0;
        this.intervaloRafaga = 50;
        this.temporizadorRafaga = 0;

        this.electrocutado = false;
        this.timerElectrocutado = 0;

        this.caida = false;
        this.velocidadCaida = 0;
        this.yCaida = 0;
    }


    dibujar() {
        if (this.electrocutado) {
            if (this.timerElectrocutado % 12 < 6) {
                image(electricidad2, this.posX, this.posY, 130, 150);
            } else {
                image(electricidad3, this.posX, this.posY, 130, 130);
            }
            image(eiriMuere, this.posX, this.posY, 120, 120);
            this.timerElectrocutado--;
            if (this.timerElectrocutado <= 0) {
                this.electrocutado = false;
            }
        }
        else if (this.vida > 0) {
            image(eiriLanzaRayo, this.posX, this.posY, 120, 120);
            this.perseguir();
            if (this.rayo.electrocutar) {
                this.rayo.dibujar();
            }
        } else {
            if (!this.caida) {
                this.caida = true;
                this.velocidadCaida = 1;
                this.yCaida = 400;
            }

            if (this.posY < this.yCaida) {
                this.posY += this.velocidadCaida;
                this.velocidadCaida += 0.3;
                if (this.posY > this.yCaida) {
                    this.posY = this.yCaida;
                }
            }
            if (frameCount % 12 < 6) {
                image(electricidad2, this.posX, this.posY, 130, 150);
            } else {
                image(electricidad3, this.posX, this.posY, 130, 130);
            }
            image(eiriMuere, this.posX, this.posY, 120, 120);
        }
        this.tiempo++;

        if (this.vida > 0 && !this.electrocutado) {

            if (this.rafagaRestante > 0) {
                this.temporizadorRafaga++;

                if (this.temporizadorRafaga >= this.intervaloRafaga) {
                    this.dispararRayo();
                    this.rafagaRestante--;
                    this.temporizadorRafaga = 0;
                }
            }
            else if (this.tiempo >= this.intervalo) {
                this.rafagaRestante = 3;
                this.temporizadorRafaga = 0;
                this.tiempo = 0;
            }
        }
    }

    recibirRayo() {
        if (this.electrocutado || this.vida <= 0) return;
        this.vida--;
        this.electrocutado = true;
        this.timerElectrocutado = 20;
    }

    dispararRayo() {
        this.rayo = new Rayo(this.posX, this.posY, rayoEiri);
        this.rayo.velocidad = 6;
        this.rayo.disparar();
    }

    perseguir() {
        if (this.electrocutado || this.vida <= 0) return;
        this.posX = 640 * noise(0.009 * frameCount);
        this.posY = 480 * noise(0.005 * frameCount + 10000);
    }

    matar() {
        this.vida = 0;
    }

    haSidoElectrocutado(rayo) {
        if (dist(this.posX, this.posY, rayo.rayoPosX, rayo.rayoPosY) < 15) {
            this.recibirRayo();
        }
    }
}