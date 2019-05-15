import Reservacion from "./Reservacion.js";
import Taller from "./Taller";

class Main {
    constructor() {
        this._reservacion = new Reservacion(document.querySelector("#reservacion"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let nombre = document.querySelector("#nombre").value;
            let fechainicio = document.querySelector("#fechainicio").value;
            let fechatermino = document.querySelector("#fechatermino").value;
            let lugaresdisponibles = document.querySelector("#lugaresdisponibles").value;

            let taller = new Taller(nombre, fechainicio, fechatermino, lugaresdisponibles);
            
            this._reservacion.addTaller(taller);

        });
    }
}
let m = new Main();