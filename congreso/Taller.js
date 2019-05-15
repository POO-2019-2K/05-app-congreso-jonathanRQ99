export default class Taller {
    constructor(nombre, fechainicio, fechatermino) {
        this._nombre = nombre.toUpperCase();
        this._fechainicio = fechainicio;
        this._fechatermino = fechatermino;
        this._lugaresdisponibles = lugaresdisponibles;
    }
    
    get nombre() {
        return this._nombre;
    }

    get fechainicio() {
        return this._fechainicio;
    }

    get fechatermino() {
        return this._fechatermino;
    }

    get lugaresdisponibles() {
        return this._lugaresdisponibles;
    }

}