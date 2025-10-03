// colores
let cielo;
let nubes;
let acera;
let transmilenio;
let ventanatrasmi;
let parteoscura;
let verdeoscuro;
let verdeclaro;
let ventanascityu;
let base;
let columnas;
let rayascinemateca;
let lineaamarilla;
let montana;
let agua;

// ventanas
let ventanasZona = 1;

// transmi
let xTransmi = 0;
let velocidadTransmi = 1;

// dia noche
let noche = true;

// seleccion general
let modoSeleccion = false;
let seleccionRelease = true;
let componentes = [
  "ventanas",
  "transmi",
  "alfa",
  "lluvia",
  "luces",
  "translate",
  "avesaurio",
  "erode",
  "posterize",
  "cucaracha",
  "fundido",
  "temblor",
  "gato",
  "disparo",
  "pescao",
  "sol",
  "mono",
  "ojo",
  "radio",
  "diaynoche",
  "misil",
  "fuego",
];
let preseleccion = 0;
let botonFlechaDerechaReleased = true;
let botonFlechaIzquierdaReleased = true;
let seleccion = "";

// botones
let gp;
let gamepads;
let btn1Released = true;
let btn0Released = true;
let btn0ReleasedV1 = true;
let btn0ReleasedV2 = true;
let btn3Released = true;
let btn14Released = true;
let btn15Released = true;

let izqReleased = false;
let derReleased = false;
let arrReleased = false;
let abaReleased = false;

// fuente
let font;

//ventanas city u
let cuadriculaVentanas1 = [];
let columnasVentanas1 = 0;
let filasVentanas1 = 0;
let colSeleccionada1 = 0;
let filSeleccionada1 = 0;

let cuadriculaVentanas2 = [];
let columnasVentanas2 = 0;
let filasVentanas2 = 0;
let colSeleccionada2 = 0;
let filSeleccionada2 = 0;

// transmi
let animacionTransmi = false;

// ui
let info = false;

// luces
let velocidadLuces = 500;

// lluvia
let gotas = [];
let cantidadGotas = 200;
let trueno = false;
let viento = 1;

// montaña
let bufferMontana;
let montañaY = [];

// translate
let transX = 0;
let transY = 0;
let escala = 1;

// fondo
let dejarTrazo = false;
let alfa = 255;

// avesaurio
let avesaurioL;
let avesaurioR;
let xAvesaurio = -200;
let yAvesaurio = 20;
let escalaAvesaurio = 0.5;
let orientacionAvesaurio = 1;

let erodeLevel = 0;
let posterizeLevel = 10;

// texto ui
let ui;
let avisoEleccion = 0;

// microfono
let mic, fft;

// cucharacha
let cucarachaL;
let cucarachaR;
let xCucaracha = -200;
let yCucaracha = 600;
let velocidadCucaracha = 2;
let escalaCucaracha = 0.5;
let orientacionCucaracha = 1;

let animacionCucaracha = false;

// tunel
let tunelpg;
let c = 0;
let t = 50;
let t1 = 150;
let inc = 0.2;
let dir = 1;

// fade
let colFundido = 0;

// temblor
let cantidadTemblor = 0;

// gato
let gato;
let gatoX = 10;
let gatoY = 0;
let gatoEscala = 1;

// disparo
let disparo;
let disparoX = 0;
let disparoY = 0;
let disparoEscala = 1;

// pez
let pez;
let pezX = 0;
let pezY = 0;
let pezEscala = 1;
let animacionPez = false;

// sol
let sol;
let solX = 0;
let solY = 0;
let solEscala = 1;

// ojo
let ojo;
let ojoX = 0;
let ojoY = 0;
let ojoEscala = 1;

// radio
let radio;
let radioX = 0;
let radioY = 0;
let radioEscala = 1;


// misil
let misil;
let misilX = 0;
let misilY = 0;
let misilEscala = 1;

// fuego
let fuego;
let fuegoX = 0;
let fuegoY = 0;
let fuegoEscala = 1;


// mono
let monoL;
let monoR;
let monoX = -200;
let monoY = 600;
let monoVelocidad = 2;
let monoEscala = 0.5;
let monoOrientacion = 1;
let monoAnimacion = false;

let threshold = false;

// volumen
let volumen;
let pico = 0.009;

// visibilidada
let verSol = true;
let verMontaña = true;
let verLluvia = true;
let verAcera = true;
let verCityUBase = true;
let verVentanas = true;
let verCinemateca = true;
let verPez = true;
let verTransmi = true;
let verGato = true;
let verAvesaurio = true;
let verCucaracha = true;
let verTunel = true;
let verDisparo = true;
let verMono = true;
let verOjo = true;
let verRadio = true;
let verMisil = true;
let verFuego = true;

let escalaCanvas = 1;
let escalaGeneral = escalaCanvas;

let tiempoAvisoSeleccion = 40;
//  -------------------- PRELOAD ------------------------------------------

function preload() {
  font = loadFont("Aldrich-Regular.ttf");
  avesaurioL = loadImage("assets/avesaurioL.gif");
  avesaurioR = loadImage("assets/avesaurio.gif");

  cucarachaL = loadImage("assets/cucarachaL.gif");
  cucarachaR = loadImage("assets/cucarachaR.gif");

  gato = loadImage("assets/cat.gif");

  disparo = loadImage("assets/pepazo.gif");

  pez = loadImage("assets/pescao.gif");

  sol = loadImage("assets/sol.gif");

  monoL = loadImage("assets/monoL.gif");
  monoR = loadImage("assets/monoR.gif");

  ojo = loadImage("assets/ojo.gif");

  radio = loadImage("assets/radio.gif");

  misil = loadImage("assets/misil.gif");

  fuego = loadImage("assets/fuego.gif");
}

//  -------------------- SETUP ------------------------------------------

function setup() {
  cnv = createCanvas(1024*escalaCanvas, 768*escalaCanvas);

  cnv.canvas.style.imageRendering = "pixelated"; 

  noSmooth();

  visibilidadCapas(false);

  ui = createGraphics(width, height);
  tunelpg = createGraphics(width, height);

  // activar micrófono
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();

  // crear FFT con 1024 bins
  fft = new p5.FFT(0.8, 128);
  fft.setInput(mic); // <<< conectar micrófono al FFT

  agua = color(209, 224, 232);
  cielo = color(209, 224, 232);
  nubes = color(240, 242, 245);
  acera = color(211, 211, 211);
  transmilenio = color(191, 51, 50);
  ventanatrasmi = color(130, 236, 250);
  parteoscura = color(150);
  verdeoscuro = color(145, 209, 117);
  verdeclaro = color(168, 255, 163);
  ventanascityu = color(148, 148, 148);
  base = color(219, 208, 188);
  columnas = color(184, 180, 180);
  rayascinemateca = color(101, 67, 33);
  lineaamarilla = color(255, 219, 18);
  montana = color(82, 145, 56);

  crearVentanas1(415, 0, 180, 320, 5, 4, 10, 20);
  crearVentanas2(615, 0, 180, 320, 5, 4, 10, 20);

  for (let i = 0; i < cantidadGotas; i++) {
    gotas.push(new Gota());
  }

  bufferMontana = createGraphics(width, height);
  generarFormaMontana();
  dibujarMontana(bufferMontana);
}

//  -------------------- DRAW ------------------------------------------

function draw() {
  volumen = mic.getLevel();
  //print(volumen);

  let temblorY = 0;

  if (volumen > pico) {
    print("pico");
    cantidadTemblor = random(-10, 10);
    temblorY = random(-10, 10);
  } else {
    cantidadTemblor = 0;
  }

  push();
  translate(
    transX + random(-cantidadTemblor, cantidadTemblor),
    transY + temblorY
  );

  scale(escalaGeneral);

  control();

  let fondo = color(0);

  // trueno y trazo fondo
  truenoFondo();

  // sol
  if (verSol) {
    actualizarSol();
  }

  gamepads = navigator.getGamepads();
  gp = gamepads[0];

  // montaña fondo
  if (verMontaña) {
    sonidoMontaña();
  }

  // colores noche
  asignarColoresSegunMomentoDelDia();

  // acera
  if (verAcera) {
    fill(acera);
    rect(0, 600, 1024, 300);
    noStroke();
  }

  // city u
  if (verCityUBase) {
    baseCityU();
  }

  if (verVentanas) {
    actualizarVentanas1();
    actualizarVentanas2();
  }

  // fuego
  if(verFuego){
    actualizarFuego();
  }

  // cinemateca
  if (verCinemateca) {
    cinemateca();
  }

  // pez
  if (verPez) {
    actualizarPez();
  }

  // transmilenio
  if (verTransmi) {
    actualizarTransmilenio();
  }

  // gato
  if (verGato) {
    actualizarGato();
  }

  // lluvia
  if(verLluvia){
    lluvia();
  }

  // avesaurio
  if (verAvesaurio) {
    avesaurio();
  }

  // cucaracha
  if (verCucaracha) {
    cucaracha();
  }

  // tunel
  if (verTunel) {
    tunel();
  }

   // misil
  if (verMisil) {
    actulizarMisil();
  }

  // disparo
  if (verDisparo) {
    actualizarDisparo();
  }

  // mono
  if (verMono) {
    actualizarMono();
  }

  // ojo
  if (verOjo) {
    actualizarOjo();
  }

  // radio
  if (verRadio) {
    actualizarRadio();
  }

  filter(POSTERIZE, posterizeLevel);

  for (let i = 0; i < erodeLevel; i++) {
    filter(ERODE);
  }

  if (threshold) {
    filter(THRESHOLD);
  }

  actualizarUI();

  // fundido
  fundido();

  pop();
}

//  -------------------- FUNCIONES ------------------------------------------
function actualizarFuego(){
   image(
    fuego,
    fuegoX,
    fuegoY,
    fuego.width * fuegoEscala,
    fuego.height * fuegoEscala
  );
}

function actulizarMisil(){
  image(
    misil,
    misilX,
    misilY,
    misil.width * misilEscala,
    misil.height * misilEscala
  );
}

function visibilidadCapas(estado) {
  verSol = estado;
  verMontaña = estado;
  verLluvia = estado;
  verAcera = estado;
  verCityUBase = estado;
  verVentanas = estado;
  verCinemateca = estado;
  verPez = estado;
  verTransmi = estado;
  verGato = estado;
  verAvesaurio = estado;
  verCucaracha = estado;
  verTunel = estado;
  verDisparo = estado;
  verMono = estado;
  verOjo = estado;
  verRadio = estado;
  verMisil = estado;
  verFuego = estado;
}

function actualizarRadio() {
  image(
    radio,
    radioX,
    radioY,
    radio.width * radioEscala,
    radio.height * radioEscala
  );
}

function actualizarOjo() {
  image(ojo, ojoX, ojoY, ojo.width * ojoEscala, ojo.height * ojoEscala);
}

function actualizarMono() {
  push();
  if (monoAnimacion) {
    monoX += monoVelocidad;
    if (monoX > width + 20) {
      monoX = -100;
    }
  }
  translate(monoX, monoY);
  if (monoOrientacion == -1) {
    image(monoL, 0, 0, monoL.width * monoEscala, monoL.height * monoEscala);
    //print("monoL");
  } else if (monoOrientacion == 1) {
    image(monoR, 0, 0, monoR.width * monoEscala, monoR.height * monoEscala);
    //print("monoR");
  }
  pop();
}

function actualizarSol() {
  image(sol, solX, solY, sol.width * solEscala, sol.height * solEscala);
}

function actualizarPez() {
  if (animacionPez) {
    pezX += 3;
    if (pezX > width) {
      pezX = -200;
    }
  }
  image(pez, pezX, pezY, pez.width * pezEscala, pez.height * pezEscala);
}

function actualizarDisparo() {
  image(
    disparo,
    disparoX,
    disparoY,
    disparo.width * disparoEscala,
    disparo.height * disparoEscala
  );
}

function actualizarGato() {
  image(gato, gatoX, gatoY, gato.width * gatoEscala, gato.height * gatoEscala);
}

function fundido() {
  fill(0, colFundido);
  noStroke();
  rect(0, 0, width, height);
}

function tunel() {
  tunelpg.strokeWeight(4);
  tunelpg.stroke(c, 50);
  tunelpg.noFill();
  /*
    let x = 100 * noise(0.5 * frameCount);
  let y = 100 * noise(0.5 * frameCount + 10000);
*/
  let x = tunelpg.noise(frameCount * 0.002) * width;
  //print(x);
  let y = tunelpg.noise(frameCount * 0.001) * height;

  tunelpg.rect(x, y, t, t1);
  c += inc * dir;
  t += inc * dir;

  if (c > 255) {
    //c -=0.5;
    dir = -1;
  }
  if (c == 0) {
    dir = 1;
  }

  if (t > 750) {
    dir - 1;
  }

  image(tunelpg, 0, 0);
}

function actualizarUI() {
  let x = width-200;
  let y = 40;
  if (modoSeleccion) {
    //let x = width - 102;
    //let y = 12;
    ui.push();
    ui.fill(0);
    ui.noStroke();

    ui.textFont(font);
    ui.stroke(0);
    ui.fill(255);
    ui.textSize(18);
    ui.textAlign(LEFT, TOP);
    let t = componentes[preseleccion];
    ui.rect(x, y, 106, 30);
    ui.fill(0);
    ui.noStroke();
    ui.text(t, x+5, y+8);
    ui.pop();
  }
  if (modoSeleccion == true) {
    image(ui, 0, 0);
  }

  let ySeleccion = height - 80;

  if (avisoEleccion < tiempoAvisoSeleccion) {
    push();
    fill(0);
    noStroke();
    textFont(font);
    stroke(0);
    strokeWeight(2);
    fill(255);
    textSize(18);
    textAlign(LEFT, TOP);
    let t = seleccion;
    rect(x, ySeleccion-3, 106, 30);
    fill(0);
    noStroke();
    text(t, x+5, ySeleccion+4);
    pop();
    avisoEleccion++;
  }
}

function truenoFondo() {
  if (trueno == true) {
    fondo = color(random(200, 255));
  } else {
    fondo = cielo;
  }
  if (dejarTrazo == false) {
    background(fondo);
  }
}

function actualizarTransmilenio() {
  transmi(xTransmi, 315);
  if (animacionTransmi) {
    xTransmi += velocidadTransmi;
    if (xTransmi > 600) {
      xTransmi = -600;
    }
  }
}

function cucaracha() {
  push();
  if (animacionCucaracha) {
    xCucaracha += velocidadCucaracha;
    if (xCucaracha > width + 20) {
      xCucaracha = -100;
    }
  }
  translate(xCucaracha, yCucaracha);
  if (orientacionCucaracha == -1) {
    image(
      cucarachaL,
      0,
      0,
      cucarachaL.width * escalaCucaracha,
      cucarachaL.height * escalaCucaracha
    );
  } else if (orientacionCucaracha == 1) {
    image(
      cucarachaR,
      0,
      0,
      cucarachaR.width * escalaCucaracha,
      cucarachaR.height * escalaCucaracha
    );
  }
  pop();
}

function avesaurio() {
  push();
  translate(xAvesaurio, yAvesaurio);
  if (orientacionAvesaurio == -1) {
    image(
      avesaurioL,
      0,
      sin(frameCount * 0.05) * 10,
      avesaurioL.width * escalaAvesaurio,
      avesaurioL.height * escalaAvesaurio
    );
/*
    image(
      avesaurioL,
      0 + 20,
      0 - 10 + sin(frameCount * 0.05) * 10,
      avesaurioL.width * escalaAvesaurio * 0.5,
      avesaurioL.height * escalaAvesaurio * 0.5
    );
    */
  } else if (orientacionAvesaurio == 1) {
    image(
      avesaurioR,
      0,
      sin(frameCount * 0.05) * 10,
      avesaurioR.width * escalaAvesaurio,
      avesaurioR.height * escalaAvesaurio
    );
    /*

    image(
      avesaurioR,
      0 + 100,
      0 - 10 + sin(frameCount * 0.05) * 10,
      avesaurioR.width * escalaAvesaurio * 0.5,
      avesaurioR.height * escalaAvesaurio * 0.5
    );
    */
  }
    
  pop();
}

function lluvia() {
  for (let g of gotas) {
    g.mover();
    g.mostrar();
  }
}

function cinemateca() {
  fill(base);
  rect(0, 500, 1074, 100);
  rect(40, 300, 1000, 200);

  //linea negra
  fill(0);
  rect(0, 600, 1074, 1);

  //rayas cinemateca

  rayasCinemateca();
}

function sonidoMontaña() {
  let spectrum = fft.analyze();

  fill(montana);

  let minAltura = 200;
  let maxAltura = height - 300;

  for (let i = 10; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, -100, width);
    // let h = -height + map(spectrum[i], 0, 255, height, 0);
    let h = map(spectrum[i], 0, 255, minAltura, maxAltura);
    noStroke();
    stroke(montana);
    strokeWeight(2);
    rect(x, height, width / spectrum.length, h - height);
    //stroke(255);
    //line(x, 0, x, h);
  }
}

//  -------------------- CONTROL ------------------------------------------
function control() {
  noStroke();
  fill(255);

  // control
  if (gp) {
    if (info) {
      text("Gamepad: " + gp.id, 20, 20);
    }

    // Mostrar ejes
    for (let i = 0; i < gp.axes.length; i++) {
      if (info == true) {
        text("Axis " + i + ": " + gp.axes[i].toFixed(2), 20, 50 + i * 20);
      }

      // transmi
      if (seleccion == "transmi" && modoSeleccion == false) {
        xTransmi += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
      }

      // gato
      if (seleccion == "gato" && modoSeleccion == false) {
        gatoX += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
        gatoY += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
        gatoEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // misil
      if (seleccion == "misil" && modoSeleccion == false) {
        misilX += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
        misilY += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
        misilEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // misil
      if (seleccion == "fuego" && modoSeleccion == false) {
        fuegoX += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
        fuegoY += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
        fuegoEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // radio
      if (seleccion == "radio" && modoSeleccion == false) {
        radioX += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
        radioY += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
        radioEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // ojo
      if (seleccion == "ojo" && modoSeleccion == false) {
        ojoX += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
        ojoY += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
        ojoEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // pez
      if (seleccion == "pescao" && modoSeleccion == false) {
        pezY += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
      }

      // avesaurio
      if (seleccion == "avesaurio" && modoSeleccion == false) {
        xAvesaurio += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
        yAvesaurio += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
        escalaAvesaurio += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);

        if (gp.axes[0].toFixed(2) < 0) {
          orientacionAvesaurio = -1;
        } else if (gp.axes[0].toFixed(2) > 0) {
          orientacionAvesaurio = 1;
        }
        // print(orientacionAvesaurio);
      }

      // mono
      if (seleccion == "mono" && modoSeleccion == false) {
        monoX += map(gp.axes[0].toFixed(2), -1, 1, -2, 2);
        monoY += map(gp.axes[1].toFixed(2), -1, 1, -2, 2);
        monoEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);

        if (gp.axes[0].toFixed(2) < 0) {
          monoOrientacion = -1;
        } else if (gp.axes[0].toFixed(2) > 0) {
          monoOrientacion = 1;
        }
        //print(monoOrientacion);
      }

      // cucaracha
      if (seleccion == "cucaracha" && modoSeleccion == false) {
        xCucaracha += map(gp.axes[0].toFixed(2), -1, 1, -1, 1);

        if (gp.axes[0].toFixed(2) < 0) {
          orientacionCucaracha = -1;
        } else if (gp.axes[0].toFixed(2) > 0) {
          orientacionCucaracha = 1;
        }
        // print(orientacionAvesaurio);
      }

      // translate
      if (seleccion == "translate" && modoSeleccion == false) {
        transX += map(gp.axes[0].toFixed(2), -1, 1, -1, 1);
        transY += map(gp.axes[1].toFixed(2), -1, 1, -1, 1);
        escalaGeneral += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // disparo
      if (seleccion == "disparo" && modoSeleccion == false) {
        disparoX += map(gp.axes[0].toFixed(2), -1, 1, -1, 1);
        disparoY += map(gp.axes[1].toFixed(2), -1, 1, -1, 1);
        disparoEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // sol
      if (seleccion == "sol" && modoSeleccion == false) {
        solX += map(gp.axes[0].toFixed(2), -1, 1, -1, 1);
        solY += map(gp.axes[1].toFixed(2), -1, 1, -1, 1);
        solEscala += map(gp.axes[3].toFixed(2), -1, 1, 0.001, -0.001);
      }

      // lluvia
      if (seleccion == "lluvia" && modoSeleccion == false) {
        viento += map(gp.axes[2].toFixed(2), -1, 1, -0.01, 0.01);
      }
    }

    // Mostrar botones
    for (let i = 0; i < gp.buttons.length; i++) {
      let b = gp.buttons[i];
      if (info == true) {
        text(
          "Button " + i + ": " + (b.pressed ? "Pressed" : b.value.toFixed(2)),
          300,
          50 + i * 20
        );
      }

      // modo seleccion
      if (!gp.buttons[8].pressed && gp.buttons[9].pressed) {
        //  print("boton 8 y 9");
        if (modoSeleccion == true && seleccionRelease == true) {
          modoSeleccion = false;
          seleccionRelease = false;
        } else if (modoSeleccion == false && seleccionRelease == true) {
          modoSeleccion = true;
          seleccionRelease = false;
        }
      } else {
        seleccionRelease = true;
      }

      // elegir componente
      if (gp.buttons[15].pressed) {
        if (modoSeleccion && botonFlechaDerechaReleased == true) {
          preseleccion++;
          if (preseleccion >= componentes.length) {
            preseleccion = 0;
          }
          botonFlechaDerechaReleased = false;
        }
      } else {
        botonFlechaDerechaReleased = true;
      }
      if (gp.buttons[14].pressed) {
        if (modoSeleccion && botonFlechaIzquierdaReleased == true) {
          preseleccion--;
          if (preseleccion < 0) {
            preseleccion = componentes.length - 1;
          }
          botonFlechaIzquierdaReleased = false;
        }
      } else {
        botonFlechaIzquierdaReleased = true;
      }

      // seleccionar
      if (gp.buttons[0].pressed) {
        seleccion = componentes[preseleccion];
        modoSeleccion = false;
        avisoEleccion = 0;
      }

      // transmi
      if (seleccion == "pescao" && modoSeleccion == false) {
        if (gp.buttons[3].pressed && btn3Released) {
          btn3Released = false;
          if (animacionPez == false) {
            animacionPez = true;
          } else {
            animacionPez = false;
          }
        } else if (!gp.buttons[3].pressed) {
          btn3Released = true;
        }
      }

      // mono
      if (seleccion == "mono" && modoSeleccion == false) {
        if (gp.buttons[3].pressed && btn3Released) {
          btn3Released = false;
          if (monoAnimacion == false) {
            monoAnimacion = true;
          } else {
            monoAnimacion = false;
          }
        } else if (!gp.buttons[3].pressed) {
          btn3Released = true;
        }
      }

      // transmi
      if (seleccion == "transmi" && modoSeleccion == false) {
        if (gp.buttons[2].pressed) {
          xTransmi = -800;
        }

        if (gp.buttons[1].pressed) {
          xTransmi = 800;
        }
        if (gp.buttons[3].pressed && btn3Released) {
          btn3Released = false;
          if (animacionTransmi == false) {
            animacionTransmi = true;
          } else {
            animacionTransmi = false;
          }
        } else if (!gp.buttons[3].pressed) {
          btn3Released = true;
        }

        if (gp.buttons[15].pressed && btn15Released) {
          btn15Released = false;
          if (velocidadTransmi < 50) {
            velocidadTransmi++;
          }
        } else if (!gp.buttons[15].pressed) {
          btn15Released = true;
        }
        if (gp.buttons[14].pressed && btn14Released) {
          btn14Released = false;
          if (velocidadTransmi > 0) {
            velocidadTransmi--;
          }
        } else if (!gp.buttons[14].pressed) {
          btn14Released = true;
        }
      }

      // cucaracha
      if (seleccion == "cucaracha" && modoSeleccion == false) {
        if (gp.buttons[3].pressed && btn3Released) {
          btn3Released = false;
          if (animacionCucaracha == false) {
            animacionCucaracha = true;
          } else {
            animacionCucaracha = false;
          }
        } else if (!gp.buttons[3].pressed) {
          btn3Released = true;
        }
      }

      // erode / threshold
      if (
        (seleccion == "erode" || seleccion == "posterize") &&
        modoSeleccion == false
      ) {
        if (gp.buttons[3].pressed && btn3Released) {
          btn3Released = false;
          if (threshold == false) {
            threshold = true;
          } else {
            threshold = false;
          }
        } else if (!gp.buttons[3].pressed) {
          btn3Released = true;
        }
      }

      // dia noche
      if (seleccion == "diaynoche" && modoSeleccion == false) {
        if (gp.buttons[6].pressed) {
          noche = true;
        }
        if (gp.buttons[7].pressed) {
          noche = false;
        }
      }

      // deseleccionar
      if (gp.buttons[8].pressed && !gp.buttons[9].pressed) {
        seleccion = "";
      }

      // ventanas
      if (seleccion == "ventanas" && modoSeleccion == false) {
        if (gp.buttons[4].pressed) {
          ventanasZona = 1;
        }
        if (gp.buttons[5].pressed) {
          ventanasZona = 2;
        }

        // ventanas 1
        if (ventanasZona == 1) {
          if (gp.buttons[0].pressed && btn0ReleasedV1) {
            btn0ReleasedV1 = false;
            if (
              cuadriculaVentanas1[colSeleccionada1][filSeleccionada1].estado
            ) {
              cuadriculaVentanas1[colSeleccionada1][
                filSeleccionada1
              ].estado = false;
              cuadriculaVentanas1[colSeleccionada1][
                filSeleccionada1
              ].parpadeante = false;
            } else {
              cuadriculaVentanas1[colSeleccionada1][
                filSeleccionada1
              ].estado = true;
            }
          } else if (!gp.buttons[0].pressed) {
            btn0ReleasedV1 = true;
          }

          if (gp.buttons[1].pressed) {
            cuadriculaVentanas1[colSeleccionada1][
              filSeleccionada1
            ].estado = true;
          }

          if (gp.buttons[3].pressed) {
            cuadriculaVentanas1[colSeleccionada1][
              filSeleccionada1
            ].parpadeante = true;
          }

          // izquierda
          if (gp.buttons[14].pressed && izqReleased) {
            izqReleased = false;
            colSeleccionada1 =
              (colSeleccionada1 - 1 + columnasVentanas1) % columnasVentanas1;
          } else if (!gp.buttons[14].pressed) {
            izqReleased = true;
          }

          // derecha
          if (gp.buttons[15].pressed && derReleased) {
            derReleased = false;
            colSeleccionada1 = (colSeleccionada1 + 1) % columnasVentanas1;
          } else if (!gp.buttons[15].pressed) {
            derReleased = true;
          }

          // arriba
          if (gp.buttons[12].pressed && arrReleased) {
            arrReleased = false;
            filSeleccionada1 =
              (filSeleccionada1 - 1 + filasVentanas1) % filasVentanas1;
          } else if (!gp.buttons[12].pressed) {
            arrReleased = true;
          }

          // abajo
          if (gp.buttons[13].pressed && abaReleased) {
            abaReleased = false;
            filSeleccionada1 = (filSeleccionada1 + 1) % filasVentanas1;
          } else if (!gp.buttons[13].pressed) {
            abaReleased = true;
          }
        }

        // ventanas 2
        if (ventanasZona == 2) {
          if (gp.buttons[0].pressed && btn0ReleasedV2) {
            btn0ReleasedV2 = false;
            if (
              cuadriculaVentanas2[colSeleccionada2][filSeleccionada2].estado
            ) {
              cuadriculaVentanas2[colSeleccionada2][
                filSeleccionada2
              ].estado = false;
              cuadriculaVentanas1[colSeleccionada1][
                filSeleccionada1
              ].parpadeante = false;
            } else {
              cuadriculaVentanas2[colSeleccionada2][
                filSeleccionada2
              ].estado = true;
            }
          } else if (!gp.buttons[0].pressed) {
            btn0ReleasedV2 = true;
          }

          if (gp.buttons[1].pressed) {
            cuadriculaVentanas2[colSeleccionada2][
              filSeleccionada2
            ].estado = true;
          }

          if (gp.buttons[3].pressed) {
            cuadriculaVentanas2[colSeleccionada2][
              filSeleccionada2
            ].parpadeante = true;
          }

          // izquierda
          if (gp.buttons[14].pressed && izqReleased) {
            izqReleased = false;
            colSeleccionada2 =
              (colSeleccionada2 - 1 + columnasVentanas2) % columnasVentanas2;
          } else if (!gp.buttons[14].pressed) {
            izqReleased = true;
          }

          // derecha
          if (gp.buttons[15].pressed && derReleased) {
            derReleased = false;
            colSeleccionada2 = (colSeleccionada2 + 1) % columnasVentanas2;
          } else if (!gp.buttons[15].pressed) {
            derReleased = true;
          }

          // arriba
          if (gp.buttons[12].pressed && arrReleased) {
            arrReleased = false;
            filSeleccionada2 =
              (filSeleccionada2 - 1 + filasVentanas2) % filasVentanas2;
          } else if (!gp.buttons[12].pressed) {
            arrReleased = true;
          }

          // abajo
          if (gp.buttons[13].pressed && abaReleased) {
            abaReleased = false;
            filSeleccionada2 = (filSeleccionada2 + 1) % filasVentanas2;
          } else if (!gp.buttons[13].pressed) {
            abaReleased = true;
          }
        }
      }

      // luces
      if (seleccion == "luces" && modoSeleccion == false) {
        if (gp.buttons[15].pressed) {
          velocidadLuces++;
        }
        if (gp.buttons[14].pressed) {
          if (velocidadLuces > 50) {
            velocidadLuces--;
          }
        }
      }

      // alfa
      if (seleccion == "alfa" && modoSeleccion == false) {
        if (gp.buttons[7].pressed) {
          if (alfa < 255) {
            alfa += 0.1;
          }
        }
        if (gp.buttons[6].pressed) {
          if (alfa > 0) {
            alfa -= 0.1;
          }
        }
      }

      // temblor
      if (seleccion == "temblor" && modoSeleccion == false) {
        if (gp.buttons[7].pressed) {
          if (cantidadTemblor < 100) {
            cantidadTemblor += 0.01;
          }
        }
        if (gp.buttons[6].pressed) {
          if (cantidadTemblor > 0) {
            cantidadTemblor -= 0.01;
          }
        }
      }

      // fundido
      if (seleccion == "fundido" && modoSeleccion == false) {
        if (gp.buttons[7].pressed) {
          if (colFundido < 255) {
            colFundido += 0.1;
          }
        }
        if (gp.buttons[6].pressed) {
          if (colFundido > 0) {
            colFundido -= 0.1;
          }
        }
      }

      // erode
      if (seleccion == "erode" && modoSeleccion == false) {
        if (gp.buttons[7].pressed) {
          if (erodeLevel < 5) {
            erodeLevel += 0.01;
          }
        }
        if (gp.buttons[6].pressed) {
          if (erodeLevel > 0) {
            erodeLevel -= 0.01;
          }
        }
      }

      // posterize
      if (seleccion == "posterize" && modoSeleccion == false) {
        if (gp.buttons[7].pressed) {
          if (posterizeLevel < 10) {
            posterizeLevel += 0.01;
          }
        }
        if (gp.buttons[6].pressed) {
          if (posterizeLevel > 0) {
            posterizeLevel -= 0.01;
          }
        }
      }

      // lluvia
      if (seleccion == "lluvia" && modoSeleccion == false) {
        if (gp.buttons[15].pressed) {
          if (cantidadGotas < 1500) {
            cantidadGotas += 5;
            agregarGotas(5);
          }
        }
        if (gp.buttons[14].pressed) {
          if (cantidadGotas > 0) {
            cantidadGotas = max(0, cantidadGotas - 5);
            quitarGotas(5);
          }
        }
        if (gp.buttons[6].pressed) {
          trueno = true;
        }
        if (gp.buttons[7].pressed) {
          trueno = false;
        }
      }

      // translate
      if (seleccion == "translate") {
        if (gp.buttons[10].pressed) {
          transX = 0;
          transY = 0;
        }
        if (gp.buttons[11].pressed) {
          escala = 1;
        }
      }

      // trazo
      if (modoSeleccion == false) {
        if (
          gp.buttons[3].pressed &&
          gp.buttons[1].pressed &&
          btn0Released &&
          btn3Released
        ) {
          btn0Released = false;
          btn3Released = false;
          if (dejarTrazo) {
            dejarTrazo = false;
          } else {
            dejarTrazo = true;
          }
        } else if (!gp.buttons[3].pressed && !gp.buttons[1].pressed) {
          btn0Released = true;
          btn3Released = true;
        }
      }
    }
  } else {
    textFont(font);
    fill(255);
    textSize(15);
    text("Presiona cualquier botón", 20, 50);
  }

  // print("modoSeleccion: " + modoSeleccion);
}

function asignarColoresSegunMomentoDelDia() {
  if (noche == true) {
    cielo = color(0, 42, 64, alfa);
    nubes = color(116, 133, 143, alfa);
    acera = color(150, alfa);
    transmilenio = color(148, 15, 28, alfa);
    ventanatrasmi = color(255, 248, 230, alfa);
    parteoscura = color(79, 87, 77, alfa);
    verdeoscuro = color(31, 140, 1, alfa);
    verdeclaro = color(115, 173, 99, alfa);
    ventanascityu = color(247, 203, 7, alfa);
    base = color(150, 136, 110, alfa);
    columnas = color(140, 136, 136, alfa);
    rayascinemateca = color(71, 39, 6, alfa);
    lineaamarilla = color(224, 206, 2, alfa);
    montana = color(45, 111, 62, alfa);
  }
  // colores día
  else {
    // cielo = color(209, 224, 232);
    cielo = color(192, 228, 255, alfa);
    nubes = color(240, 242, 245, alfa);
    acera = color(211, 211, 211, alfa);
    transmilenio = color(191, 51, 50, alfa);
    ventanatrasmi = color(80, 222, 250, alfa);
    parteoscura = color(150, alfa);
    verdeoscuro = color(145, 209, 117, alfa);
    verdeclaro = color(168, 255, 163, alfa);
    ventanascityu = color(148, 148, 148, alfa);
    base = color(219, 208, 188, alfa);
    columnas = color(184, 180, 180, alfa);
    rayascinemateca = color(101, 67, 33, alfa);
    lineaamarilla = color(255, 219, 18, alfa);
    montana = color(82, 145, 56, alfa);
  }
}

function rayasCinemateca() {
  fill(rayascinemateca);

  let iPrev = 0;

  for (let i = 0; i < width; i++) {
    let x = i * 10;
    let y = 500;
    let alto = 80;
    if (i > 3) {
      y = 300;
      alto = 280;
      if (i % 10 == 0 || iPrev % 10 == 0) {
        alto = 230;
      }
    }
    rect(x, y, 3, alto);
    iPrev = i;
  }
}

function baseCityU() {
  //parte oscura
  push();
  noStroke();

  fill(parteoscura);
  rect(300, 0, 600, 300);
  pop();

  //columnas
  push();
  noStroke();
  fill(columnas);
  rect(590, 0, 20, 300);
  rect(390, 0, 20, 300);
  rect(790, 0, 20, 300);
  pop();

  //Caja cuadritos
  push();
  stroke(0);
  noFill();
  rect(390, 0, 200, 300);
  pop();

  //Caja cuadritos 2
  push();
  stroke(0);
  noFill();
  rect(610, 0, 200, 300);
  pop();

  //color verde oscuro 1
  fill(verdeoscuro);
  noStroke();
  rect(410, 0, 40, 300);
  rect(450, 120, 35, 200);
  rect(485, 180, 35, 300);
  rect(520, 180, 35, 300);
  rect(555, 240, 35, 300);

  //color verde claro 1
  fill(verdeclaro);
  noStroke();
  rect(555, 0, 35, 240);
  rect(520, 0, 35, 180);
  rect(485, 0, 35, 180);
  rect(450, 0, 35, 120);

  //color verde oscuro 2
  fill(verdeoscuro);
  noStroke();
  rect(610, 0, 40, 300);
  rect(650, 120, 35, 300);
  rect(685, 180, 35, 300);
  rect(720, 180, 35, 300);
  rect(755, 240, 35, 300);

  //color verde claro 2
  fill(verdeclaro);
  noStroke();
  rect(755, 0, 35, 240);
  rect(720, 0, 35, 180);
  rect(685, 0, 35, 180);
  rect(650, 0, 35, 120);
}

function transmi(posX, posY) {
  //transmilenio
  push();
  translate(posX, posY);
  fill(transmilenio);
  stroke(0);
  rect(posX, posY, 1100, 140); // 635

  //Ventana
  fill(ventanatrasmi);
  strokeWeight(6);
  stroke(0);
  rect(posX + 20, posY + 20, 1050, 70); // 650

  fill(0);
  rect(posX + 20, posY + 20, 5, 70); // 650
  rect(posX + 80, posY + 20, 5, 70);
  rect(posX + 140, posY + 20, 5, 70);
  rect(posX + 260, posY + 20, 5, 70);
  rect(posX + 320, posY + 20, 5, 70);
  rect(posX + 380, posY + 20, 5, 70);
  rect(posX + 500, posY + 20, 5, 70);
  rect(posX + 560, posY + 20, 5, 70);
  rect(posX + 620, posY + 20, 5, 70);
  rect(posX + 740, posY + 20, 5, 70);
  rect(posX + 800, posY + 20, 5, 70);
  rect(posX + 860, posY + 20, 5, 70);
  rect(posX + 980, posY + 20, 5, 70);
  rect(posX + 1020, posY + 20, 5, 70);

  //linea amarilla

  noFill();
  strokeWeight(6);
  stroke(lineaamarilla);
  rect(posX + 10, posY + 110, 1074, 10); // 740
  pop();
}

function nube(posX, posY, cant, tam_, sep, mover) {
  //nubes
  fill(nubes);
  push();
  translate(posX, posY);

  for (let i = 0; i < cant; i++) {
    let x = i * sep;
    let tam = tam_;
    if (mover == true) {
      tam = map(
        noise(frameCount * 0.005 + (i + posX * 0.1)),
        0,
        1,
        tam_,
        tam_ * 6
      );
    }

    ellipse(x, 0, tam, tam);
  }

  pop();
}

function actualizarVentanas1() {
  for (let i = 0; i < columnasVentanas1; i++) {
    for (let j = 0; j < filasVentanas1; j++) {
      if (cuadriculaVentanas1[i] && cuadriculaVentanas1[i][j]) {
        cuadriculaVentanas1[i][j].display();
      }
    }
  }

  if (seleccion === "ventanas") {
    if (
      cuadriculaVentanas1[colSeleccionada1] &&
      cuadriculaVentanas1[colSeleccionada1][filSeleccionada1] &&
      typeof cuadriculaVentanas1[colSeleccionada1][filSeleccionada1]
        .resaltar === "function"
    ) {
      if (ventanasZona == 1) {
        cuadriculaVentanas1[colSeleccionada1][filSeleccionada1].resaltar();
      }
    } else {
      console.warn(
        "No se pudo resaltar ventana 1:",
        colSeleccionada1,
        filSeleccionada1,
        cuadriculaVentanas1[colSeleccionada1]
      );
    }
  }
}

function actualizarVentanas2() {
  for (let i = 0; i < columnasVentanas2; i++) {
    for (let j = 0; j < filasVentanas2; j++) {
      if (cuadriculaVentanas2[i] && cuadriculaVentanas2[i][j]) {
        cuadriculaVentanas2[i][j].display();
      }
    }
  }

  if (seleccion === "ventanas") {
    if (
      cuadriculaVentanas2[colSeleccionada2] &&
      cuadriculaVentanas2[colSeleccionada2][filSeleccionada2] &&
      typeof cuadriculaVentanas2[colSeleccionada2][filSeleccionada2]
        .resaltar === "function"
    ) {
      if (ventanasZona == 2) {
        cuadriculaVentanas2[colSeleccionada2][filSeleccionada2].resaltar();
      }
    } else {
      console.warn(
        "No se pudo resaltar ventana 2:",
        colSeleccionada2,
        filSeleccionada2,
        cuadriculaVentanas2[colSeleccionada2]
      );
    }
  }
}

function crearVentanas1(
  posX,
  posY,
  ancho,
  alto,
  cantColumn,
  cantFil,
  espacioX,
  espacioY
) {
  push();
  let anchoModulo = 0;
  let altoModulo = 0;
  fill(ventanascityu);

  columnasVentanas1 = cantColumn;
  filasVentanas1 = cantFil;

  if (espacioX == null && espacioY == null) {
    translate(posX, posY);
    anchoModulo = ancho / cantColumn;
    altoModulo = alto / cantFil;

    for (let i = 0; i < cantColumn; i++) {
      let x = i * anchoModulo;
      cuadriculaVentanas1[i] = [];

      for (let j = 0; j < cantFil; j++) {
        let y = j * altoModulo;
        //rect(x, y, anchoModulo, altoModulo);
        cuadriculaVentanas1[i][j] = new Ventana(
          x + posX,
          y + posY,
          anchoModulo,
          altoModulo
        );
      }
    }
  } else {
    //translate(posX, posY);
    let espacioXSum = cantColumn * espacioX + espacioX;
    let espacioYSum = cantFil * espacioY + espacioY;

    anchoModulo = (ancho - espacioXSum) / cantColumn;
    altoModulo = (alto - espacioYSum) / cantFil;

    for (let i = 0; i < cantColumn; i++) {
      let x = i * (anchoModulo + espacioX) + espacioX / 2;
      cuadriculaVentanas1[i] = [];

      for (let j = 0; j < cantFil; j++) {
        let y = j * (altoModulo + espacioY);
        //rect(x, y, anchoModulo, altoModulo);
        cuadriculaVentanas1[i][j] = new Ventana(
          x + posX,
          y + posY,
          anchoModulo,
          altoModulo
        );
      }
    }
  }
  pop();
}

function crearVentanas2(
  posX,
  posY,
  ancho,
  alto,
  cantColumn,
  cantFil,
  espacioX,
  espacioY
) {
  push();
  let anchoModulo = 0;
  let altoModulo = 0;
  fill(ventanascityu);

  columnasVentanas2 = cantColumn;
  filasVentanas2 = cantFil;

  if (espacioX == null && espacioY == null) {
    translate(posX, posY);
    anchoModulo = ancho / cantColumn;
    altoModulo = alto / cantFil;

    for (let i = 0; i < cantColumn; i++) {
      let x = i * anchoModulo;
      cuadriculaVentanas2[i] = [];

      for (let j = 0; j < cantFil; j++) {
        let y = j * altoModulo;
        //rect(x, y, anchoModulo, altoModulo);
        cuadriculaVentanas2[i][j] = new Ventana(
          x + posX,
          y + posY,
          anchoModulo,
          altoModulo
        );
      }
    }
  } else {
    //translate(posX, posY);
    let espacioXSum = cantColumn * espacioX + espacioX;
    let espacioYSum = cantFil * espacioY + espacioY;

    anchoModulo = (ancho - espacioXSum) / cantColumn;
    altoModulo = (alto - espacioYSum) / cantFil;

    for (let i = 0; i < cantColumn; i++) {
      let x = i * (anchoModulo + espacioX) + espacioX / 2;
      cuadriculaVentanas2[i] = [];

      for (let j = 0; j < cantFil; j++) {
        let y = j * (altoModulo + espacioY);
        //rect(x, y, anchoModulo, altoModulo);
        cuadriculaVentanas2[i][j] = new Ventana(
          x + posX,
          y + posY,
          anchoModulo,
          altoModulo
        );
      }
    }
  }
  pop();
}

class Ventana {
  constructor(x, y, anchoModulo, altoModulo) {
    this.x = x;
    this.y = y;
    this.ancho = anchoModulo;
    this.alto = altoModulo;
    this.estado = false;
    this.col = ventanascityu;
    this.parpadeante = false;
    this.varTiempo = random(-10, 10);
    this.ultimoCambio = 0;
    this.parpadeoEstado = false; // estado del parpadeo
  }

  display() {
    noStroke();
    if (this.estado == true) {
      if (this.parpadeante == false) {
        fill(ventanascityu);
      } else {
        // usar el método de la instancia
        this.parpadear();
        if (this.parpadeoEstado) {
          fill(ventanascityu);
        } else {
          fill(40);
        }
      }
    } else {
      fill(40);
    }
    rect(this.x, this.y, this.ancho, this.alto);
  }

  parpadear() {
    let ahora = millis();
    if (ahora - this.ultimoCambio > velocidadLuces + this.varTiempo) {
      this.parpadeoEstado = !this.parpadeoEstado; // cambiar estado
      this.ultimoCambio = ahora;
    }
  }

  resaltar() {
    push();
    stroke(255);
    strokeWeight(3);
    noFill();
    rect(this.x, this.y, this.ancho, this.alto);
    pop();
  }

  apagar() {
    this.estado = false;
  }
}

function keyPressed() {
  if (key == " ") {
    if (info == false) {
      info = true;
    } else {
      info = false;
    }
  }
}

// clase Gota
class Gota {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.largo = random(2, 10);
    this.vel = random(4, 10);
    this.grosor = 3;
  }

  mover() {
    this.y += this.vel;
    this.x += viento;
    if (this.y > height) {
      this.y = random(-100, 0);
      this.x = random(width);
    }
  }

  mostrar() {
    stroke(200, 150); // color de la lluvia
    strokeWeight(this.grosor);
    line(this.x, this.y, this.x, this.y + this.largo);
  }
}

function agregarGotas(cant) {
  for (let i = 0; i < cant; i++) {
    gotas.push(new Gota());
  }
}

function quitarGotas(cant) {
  for (let i = 0; i < cant; i++) {
    if (gotas.length > 0) {
      gotas.pop();
    }
  }
}

function generarFormaMontana() {
  montañaY = [];
  let n = 0;
  let yOffSet = 100;
  for (let i = 0; i < width; i++) {
    n += 0.01;
    let noiseVal = noise(n);
    montañaY[i] = noiseVal * 100 + yOffSet + random(-0.4, 0.4);
  }
}

function dibujarMontana(pg) {
  pg.clear();
  pg.noStroke();
  pg.beginShape();
  for (let i = 0; i < pg.width; i++) {
    pg.vertex(i, montañaY[i]);
  }
  pg.vertex(pg.width, pg.height);
  pg.vertex(0, pg.height);
  pg.endShape(CLOSE);
}

function keyPressed() {
  if (key == " ") {
    if (info) {
      info = false;
    } else {
      info = true;
    }
  }

  if (key == "q" || key == "Q") {
    verSol = !verSol;
  }

  if (key == "w" || key == "W") {
    verMontaña = !verMontaña;
  }

  if (key == "e" || key == "E") {
    verLluvia = !verLluvia;
  }

  if (key == "r" || key == "R") {
    verAcera = !verAcera;
  }

  if (key == "t" || key == "T") {
    verCityUBase = !verCityUBase;
  }

  if (key == "y" || key == "Y") {
    verVentanas = !verVentanas;
  }

  if (key == "u" || key == "U") {
    verCinemateca = !verCinemateca;
  }

  if (key == "i" || key == "I") {
    verPez = !verPez;
  }

  if (key == "o" || key == "O") {
    verTransmi = !verTransmi;
  }

  if (key == "p" || key == "P") {
    verGato = !verGato;
  }

  if (key == "a" || key == "A") {
    verAvesaurio = !verAvesaurio;
  }

  if (key == "s" || key == "S") {
    verCucaracha = !verCucaracha;
  }

  if (key == "d" || key == "D") {
    verTunel = !verTunel;
  }

  if (key == "f" || key == "F") {
    verDisparo = !verDisparo;
  }

  if (key == "g" || key == "G") {
    verMono = !verMono;
  }

  if (key == "h" || key == "H") {
    verOjo = !verOjo;
  }

   if (key == "j" || key == "J") {
    verRadio = !verRadio;
  }

   if (key == "k" || key == "K") {
    verMisil = !verMisil;
  }

   if (key == "l" || key == "L") {
    verFuego = !verFuego;
  }


}

function mousePressed() {
  userStartAudio();
  mic.start();
}

// version montaña anterior

/*

  let y1 = 0;
  let n = 0.0;
  let yOffSet = 100;

  for (i = 0; i < width; i++) {
    n += 0.01;
    let noiseVal = noise(n);
    let x = i;
    y1 = noiseVal * 100 + yOffSet + random(-0.4, 0.4);
    stroke(montana);
    line(x, y1, x, height);
  }
  */

/*
  noStroke();
  fill(montana); // mismo color que antes
  beginShape();
  let n = 0.0;
  let yOffSet = 100;
  for (let i = 0; i < width; i++) {
    n += 0.01;
    let noiseVal = noise(n);
    let y = noiseVal * 100 + yOffSet + random(-0.4, 0.4);
    vertex(i, y); // vértice superior
  }
  // agregar vértices para cerrar el shape hasta el borde inferior
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  */

/*
  tint(montana);
  image(bufferMontana, 0, 0);
  noTint();
  */
