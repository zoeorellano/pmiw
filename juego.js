class Juego {
    constructor(administrador) {
        this.administrador = administrador;
        this.crearLain();
        this.crearEiri();
        this.cablesLain = [];
        this.cablesEiri = [];
        this.conexionCablesLain();
        this.conexionCablesEiri();

        this.distanciaAtaque = 0;

        this.xCableLain = 0;
        this.yCableLain = 0;
        this.xCableEiri = 0;
        this.yCableEiri = 0;


    }

    actualizar() {
        this.lain.actualizar();
        this.controlarAtaqueALain();
        this.controlarDisparosaEiri();

        if (this.lain.muerta) {
            if (this.administrador && this.administrador.pantallas[2] && this.administrador.pantallas[2].iniciarMuerte) {
                this.administrador.pantallas[2].iniciarMuerte();
            }
        }
            else if (this.eiri.vida <= 0) {
                if (this.administrador && this.administrador.pantallas[2] && this.administrador.pantallas[2].iniciarMuerte){
                    this.administrador.pantallas[2].iniciarFinal();
            }

        }
}


    dibujar() {
        this.dibujarCables();
        this.eiri.dibujar();
        this.lain.dibujar();
        this.dibujarBarra(this.lain, marcoLain, 30, 30);
        this.dibujarBarra(this.eiri, marcoEiri, 30, 65);
    }

    dibujarBarra(personaje, marco, x, y) {
        if (personaje.vida > 0) {
            fill(0)
            noStroke()
            rect(x + 10, y - 6.5, 125, 14)
            fill(100)
            rect(x + 10, y - 6.5, map(personaje.vida, 0, personaje.maxVida, 0, 125), 14)
        }
        image(marco, x + 125 / 2, y + 14 / 2, 200, 120)
    }

    crearEiri() {
        /*en la clase eiri recibe su conexion con el juego. se le pasa como parametro this. porque espera el objeto juego*/
        this.eiri = new Eiri();
    }

    crearLain() {
        this.lain = new Lain(width / 2, 400);
    }



    controlarDisparosaEiri() {
        if (this.lain.lainDisparoRayo()) {
            this.eiri.haSidoElectrocutado(this.lain.rayo);
        }
    }

    controlarAtaqueALain() {
        if (this.lain && this.eiri && this.eiri.rayo && this.eiri.rayo.electrocutar) {
            let distancia = dist(this.eiri.rayo.rayoPosX, this.eiri.rayo.rayoPosY, this.lain.posX, this.lain.posY);
            if (distancia < 25) {
                this.lain.recibirRayo();
                this.eiri.rayo.electrocutar = false;
            }
        }
    }

    dibujarCables() {
        this.xCableLain = this.lain.posX;
        this.yCableLain = this.lain.posY;
        this.xCableEiri = this.eiri.posX;
        this.yCableEiri = this.eiri.posY;

        for (let cable of this.cablesLain) {
            /*bucle que devuelve el objeto de manera directa(el new Cable que esta en el array). "dame le primer cable y hace lo que pide la accion". Es mas directo si no importa en que posicion del array esta el objeto
            sino podria poner :

            this.cableActual == null;
            dibujarCables (){
            for (let i = 0; i < this.cables.lenght; i++){
            this.cableActual = this.cables[i];
            this.cableActual.dibujar(this.xCableLain, this.yCableLain, this.xCableEiri, this.CableEiri);
        }
            }
            */


            cable.dibujar(this.xCableLain, this.yCableLain, this.xCableEiri, this.yCableEiri);
        }
        for (let cable of this.cablesEiri) {
            cable.dibujar(cable.topX, 0, this.xCableEiri, this.yCableEiri);
        }
    }

    conexionCablesLain() {
        for (let i = 0; i < 5; i++) {
            this.cablesLain.push(new Cable());
            /*funcion que agrega elementos al final del arreglo, si hay 5 cables por cada vuelta arregla uno en el array de cables. es correcto tambien si se escribe:
            this.cables[i] = new Cable();
            */
        }
    }

    conexionCablesEiri() {
        for (let i = 0; i < 15; i++) {
            this.cablesEiri.push(new Cable());
        }
    }

    keyPressed(keyCode) {
        this.lain.keyPressed(keyCode);
    }

    keyReleased(keyCode) {
        this.lain.keyReleased(keyCode);
    }

}