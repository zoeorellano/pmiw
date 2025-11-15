class Rayo {
    constructor(posX, posY, varianteDeRayo) {
        this.rayoPosX = posX;
        this.rayoPosY = posY;
        this.velocidad;
        this.electrocutar = false;
        this.variantesDeRayo = varianteDeRayo;
        this.timerElectricidad = 0;
    }

    dibujar() {
        if (this.electrocutar) {
            image(this.variantesDeRayo, this.rayoPosX, this.rayoPosY, 40, 80);
            this.mover();
        }
    }

    mover() {
        this.rayoPosY += this.velocidad;
    }

    disparar() {
        this.electrocutar = true;
    }
}
