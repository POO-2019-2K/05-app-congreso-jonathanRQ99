export default class Taller {
    constructor(taller) {
        this._nombre = taller.nombre.toUpperCase();
        this._fechaI = taller.fechaI;
        this._fechaF = taller.fechaF;
        this._lugaresD = taller.lugaresD;
        this._duracion = taller.duracion;
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