class barraDeVida {
    constructor(personaje, marco, x, y) {
        this.personaje = personaje;
        this.marco = marco;
        this.x = x;
        this.y = y;

        this.anchoBarra = 125;
        this.altoBarra = 14;

        this.anchoMarco = 200;
        this.altoMarco = 120;

        this.barOffsetX = 10;
        this.barOffsetY = -6.5;
    }

    dibujar() {
        if (this.personaje.vida > 0) {
            fill(0);
            noStroke();
            rect(this.x + this.barOffsetX, this.y + this.barOffsetY, this.anchoBarra, this.altoBarra);

            fill(100);
            rect(this.x + this.barOffsetX, this.y + this.barOffsetY, map(this.personaje.vida, 0, this.personaje.maxVida, 0, this.anchoBarra), this.altoBarra);
        }
        image(this.marco, this.x + this.anchoBarra / 2, this.y + this.altoBarra / 2, this.anchoMarco, this.altoMarco);
    }
}