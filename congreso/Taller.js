export default class Taller {
    constructor(nombre, fechainicio, fechatermino) {
        this._nombre = nombre.toUpperCase();
        this._fechaI = fechaI;
        this._fechaF = fechaF;
        this._lugaresD = lugaresD;
        this._duracion = duracion;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"

        ]
    }
    
    get nombre() {
        return this._nombre;
    }
    get fechaI() {
        return this._fechaI;
    }
    get fechaF() {
        return this._fechaF;
    }
    get lugaresD() {
        return this._lugaresD;
    }
    get duracion() {
        return this._duracion;
    }
    getFechaInicioString(){
        let date = 
        this._fechaI.getDate() + "/" +
        this._months[this._fechaI.getMonth()] + "/" +
        this._fechaI.getFullYear();
        return date  
    }
    getFechaFinalString(){
        let date = 
        this._fechaF.getDate() + "/" +
        this._months[this._fechaF.getMonth()] + "/" +
        this._fechaF.getFullYear();
        return date  
    }
    
}