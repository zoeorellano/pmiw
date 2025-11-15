let administrador;

let fuente;
let fuente1;
let fuente2;

let logoLain;
let gifMenu;

let introGif2;

let gifOver1;
let gifOver2;

let lainQuieta;
let lainCorreDerecha;
let lainCorreIzquierda;
let lainLanzaRayo;
let lainElectrocutada;
let lainMuere;



let eiriLanzaRayo;
let eiriElectrocutado;
let eiriMuere;

let electricidad1;
let electricidad2;
let electricidad3;

let fondo;
let rayoLain;
let rayoEiri;
let marcoLain;
let marcoEiri;

let paletaDeColores = ['#000000ff', '#ffffff'];

let soniditos;
let buenisimo;
let wannaHotel;


function preload() {
    fuente1 = loadFont("assets/fuentes/PunkTypewriter.otf");
    fuente2 = loadFont("assets/fuentes/trauma.ttf");

    logoLain = loadImage("assets/imagenes/logolain.png");
    gifMenu = loadImage("assets/gifs/menu2.gif");

    introGif2 = loadImage("assets/gifs/introgif2.gif");

    fondo = loadImage("assets/imagenes/fondo.png");

    lainQuieta = loadImage("assets/gifs/lainquieta.gif");
    lainCorreDerecha = loadImage("assets/gifs/laincorrederecha.gif");
    lainCorreIzquierda = loadImage("assets/gifs/laincorreizquierda.gif");
    lainLanzaRayo = loadImage("assets/gifs/lainlanzarayo.gif");
    lainMuere = loadImage("assets/gifs/lainmuere.gif");

    eiriLanzaRayo = loadImage("assets/gifs/eirilanzarayo.gif");
    eiriMuere = loadImage("assets/gifs/eirimuere.gif");

    electricidad1 = loadImage("assets/imagenes/electricidad.png");
    electricidad2 = loadImage("assets/imagenes/electricidad2.png");
    electricidad3 = loadImage("assets/imagenes/electricidad3.png");

    rayoLain = loadImage("assets/imagenes/rayolain.png");

    rayoEiri = loadImage("assets/imagenes/rayoeiri.png");


    marcoLain = loadImage("assets/imagenes/barradevidalain.png");
    marcoEiri = loadImage("assets/imagenes/barradevidaeiri.png");

    marcoLain = loadImage("assets/imagenes/barradevidalain.png");
    marcoEiri = loadImage("assets/imagenes/barradevidaeiri.png");

    marcoLain = loadImage("assets/imagenes/barradevidalain.png");
    marcoEiri = loadImage("assets/imagenes/barradevidaeiri.png");

    gifOver1 = loadImage("assets/gifs/gameovergif.gif");
    gifOver2 = loadImage("assets/gifs/gifover2.gif");

    soniditos = loadSound("assets/sonidos/soniditos.mp3");
    buenisimo = loadSound("assets/sonidos/buenisimo.mp3");
    wannaHotel = loadSound("assets/sonidos/wannahotel.mp3");
}

function setup() {
    createCanvas(640, 480);
    imageMode(CENTER);

    administrador = new AdministadorDePantalla();
}

function draw() {
    administrador.actualizar();
    administrador.dibujar();
}

function mousePressed() {
    administrador.mousePressed();
}


function keyPressed() {
    administrador.keyPressed(keyCode);
}

function keyReleased() {
    administrador.keyReleased(keyCode);
}

function gradienteAnimado(amt, colorA, colorB) {
    let variacion = random(-0.5, 0.5);
    let g = amt + variacion;
    g = constrain(g, 0, 1);
    return lerpColor(colorA, colorB, g);
}

