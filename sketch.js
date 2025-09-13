/*PMIW - COMISION 2
https://www.youtube.com/watch?v=yMh8Xf_M0Ks*/

let imagen;

let filas = 20;
let columnas = 60;
let ejeX = 600;

let mover = false;
let velocidad = 4;

let violeta;
let fucsia;
let lila;
let negro;

let colorA;
let colorB;
let colorMezclado;
let cambiarColor = false;
let colorActual = 0;
let interA;
let interB;
let amt = 0;
let gradiente;

function preload() {
    imagen = loadImage("assets/M_4.jpg");
}

function setup() {
    createCanvas(800, 400);
    image(imagen, 0, 0, 400, 400);

    violeta = color(75, 0, 130);
    fucsia = color(170, 0, 129, 255);
    lila = color(100, 30, 100, 255);
    negro = color(0);

    setColores();
}

function draw() {
    dibujarTablero(filas, columnas, ejeX);

    if (mover) {
        ejeX += velocidad;
        if (ejeX > 800 || ejeX < 400) {
            velocidad = velocidad * -1;
        }
    }


    if (cambiarColor && amt < 1) {
        amt = amt + 0.01;
    } else if (!cambiarColor) {
        amt = 0;
    }
}


function dibujarTablero(filas, columnas, ejeX) {
    let y = 0;
    let alto = height / filas;

    for (let fila = 0; fila < filas; fila++) {
        let x = 400;

        for (let columna = 0; columna < columnas; columna++) {

            let distancia = dist(x, 0, ejeX, 0);

            let ancho = map(distancia, 0, 200, 1, 40);
            let colorBase;


            if ((fila + columna) % 2 == 0) {
                colorBase = color(0);
            } else {
                if (cambiarColor) {
                    gradiente = map(fila, 0, filas - 1, 0, 1);
                    interA = lerpColor(colorA, colorB, amt);
                    interB = lerpColor(colorB, colorA, amt);
                    colorBase = gradienteAnimado(gradiente, interA, interB);
                } else {
                    colorBase = color(255);
                }
            }

            fill(colorBase);
            noStroke();
            rect(x, y, ancho, alto);
            x += ancho;

        }
        y += alto;

    }
}

function gradienteAnimado(gradiente, interA, interB) {
    let variacion = random(-0.1, 0.1);
    let g = gradiente + variacion;

    g = constrain(g, 0, 1);

    return lerpColor(interA, interB, g);
}

function setColores() {
    if (colorActual == 0) {
        colorA = violeta;
        colorB = negro;
    } else if (colorActual == 1) {
        colorA = fucsia;
        colorB = negro;
    } else {
        colorA = lila;
        colorB = negro;
    }
}

function mouseClicked() {
    mover = !mover;

}

function keyPressed() {

    if (key === 'r' || key === 'R') {
        reiniciar();
    }
    if (key === ' ') {
        cambiarColor = true;
        colorActual = (colorActual + 1) % 3;
        setColores();
        amt = 0;
    }
}

function reiniciar() {
    mover = false;
    ejeX = 600;
    velocidad = 4
    cambiarColor = false;
    amt = 0;
    colorActual = 0;
    setColores();
}