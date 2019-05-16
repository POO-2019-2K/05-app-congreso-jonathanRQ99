import Reservacion from "./Reservacion.js";
import Taller from "./Taller.js";

class Main {
    constructor() {
        let agenda = new Reservacion(
            document.querySelector("#agenda"),
            document.querySelector("#info")
        );
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            if (form.checkValidity() === true){
                let nombre = document.querySelector("#nombre").value;
                let fechainicio = document.querySelector("#fechainicio").value;
                fechainicio = fechainicio.split("-");
                let fechaI = new Date(fechainicio[0], fechainicio[1]-1, fechainicio[2]);
                let fechatermino = document.querySelector("#fechatermino").value;
                fechatermino = fechatermino.split("-");
                let fechaF = new Date(fechatermino[0], fechatermino[1]-1, fechatermino[2]);
                let lugaresD = document.querySelector("#lugaresdisponibles").value;
                let duracion = document.querySelector("#duracion").value;

                let objtaller ={
                nombre: nombre, 
                fechaI : fechaI, 
                fechaF : fechaF, 
                lugaresD: lugaresD,
                duracion : duracion
                };
                let taller = new Taller(objtaller);
                agenda.addTall(taller)
            }
            form.classList.add("was-validated"); });
        }
    }
let m = new Main();