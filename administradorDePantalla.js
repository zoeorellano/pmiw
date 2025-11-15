class AdministadorDePantalla {
    constructor() {
        this.pantallas = [];
        this.pantallaActual = 0;

        this.pantallas.push(new PantallaIntro(this));
        this.pantallas.push(new PantallaMenu(this));
        this.pantallas.push(new PantallaJuego(this));
    }

    cambiarPantalla(indice) {
        this.pantallaActual = indice;

        if (this.pantallas[this.pantallaActual].reiniciar) {
            this.pantallas[this.pantallaActual].reiniciar();
        }
    }

    actualizar() {
        this.pantallas[this.pantallaActual].actualizar();
    }

    dibujar() {
        this.pantallas[this.pantallaActual].dibujar();
    }

    mousePressed() {
        this.pantallas[this.pantallaActual].mousePressed();
    }

    keyPressed(keyCode) {
        this.pantallas[this.pantallaActual].keyPressed(keyCode);

        if (key == 'r' || key == 'R') {
            administrador = new AdministadorDePantalla();
        }
    }

    keyReleased(keyCode) {
        this.pantallas[this.pantallaActual].keyReleased(keyCode);
    }

    reiniciarSoloJuego() {
        this.pantallas[2] = new PantallaJuego(this);
        this.cambiarPantalla(2);

    }
}