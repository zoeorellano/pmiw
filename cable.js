class Cable {
    constructor() {
        this.topX = random(width);
        this.curvaturaX = random(-20, 100);
        this.curvaturaY = random(30, 100);
        this.miColor = color(random(100, 200));
        this.grosor = 4;

        this.faseInicial = random(TWO_PI);
        this.velocidadOnda = random(0.02, 0.05);
        this.amplitudOnda = random(10, 30);

        this.pMedioX = 0
        this.pMedioY = 0;
        this.onda = 0;
    }

    dibujar(x1, y1, x2, y2) {
        noFill();
        stroke(this.miColor);
        strokeWeight(this.grosor);

        this.pMedioX = (x1 + x2) / 2;
        this.pMedioY = (y1 + y2) / 2;

        this.onda = sin(frameCount * this.velocidadOnda + this.faseInicial) * this.amplitudOnda;

        bezier(x1, y1, this.pMedioX + this.curvaturaX + this.onda, this.pMedioY + this.curvaturaY + this.onda / 2, this.pMedioX - this.curvaturaX - this.onda, this.pMedioY + this.curvaturaY - this.onda / 2, x2, y2);
    }
}