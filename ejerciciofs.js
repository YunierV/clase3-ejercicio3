//agregar a un archivo los numeros del 1 al 10

//imprimir las caractereisticas basicas del sistema y agregar todas estas caracteristicas a un archivo
//nombre de usuario, procesador, sistema operativo y ram total GB-MB
const os = require('os');
const fs = require('fs');

//funciones de conversion

function bytemb (num) {
    let conver = num * 1.0E-6
    return conver
}

function bytegb (num) {
    let conver = num * 1.0E-9
    return conver
}

const ramtMB = bytemb(os.totalmem).toFixed()

const ramtGB = bytegb(os.totalmem).toFixed(2)

const sisOp = os.version()

const procesador = os.cpus().slice(0,1).map((reg)=>reg.model)

const nomUsu = os.hostname()

const especificacionesPC = `Sistema operativo: ${sisOp}
Nombre de usuario: ${nomUsu}
Procesador: ${procesador}
Memoria ram total: ${ramtGB}-GB (${ramtMB}-MB)`;

fs.writeFileSync('impresion.txt', especificacionesPC);
console.log('se ha generado el archivo');