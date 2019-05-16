import Taller from "./Taller.js";

export default class Reservacion{
    constructor(tableAgenda, tableInfo){
        this._tableAgenda = tableAgenda;
        this._tableInfo = tableInfo;
        this._cantTalleres = 0;
        this._talleres= [];
        this._initTable();
    }
    _initTable(){
        let lsTalleres = JSON.parse(localStorage.getItem("Talleres"));
        if(lsTalleres === null){
            return
        }
        lsTalleres.forEach((e,index)=>{
            e.fechaI = new Date (e.fechaI);
            e.fechaF = new Date (e.fechaF);
            this._addToTable(new Taller(e));
        })
    }
    _addToTable(taller){
        let row = this._tableAgenda.insertRow(-1);
        let cellNombre = row.insertCell(0);
        let cellFechaI = row.insertCell(1);
        let cellFechaF = row.insertCell(2);
        let cellCapacidad = row.insertCell(3);
        let cellDuracion = row.insertCell(4);

        cellNombre.innerHTML = taller.nombre
        cellFechaI.innerHTML = taller.getFechaInicioString();
        cellFechaF.innerHTML = taller.getFechaFinalString();
        cellCapacidad.innerHTML = taller.lugaresD;
        cellDuracion.innerHTML = taller.duracion;

        this._cantTalleres++;
        this.tableInfo.row[0].cells[1].innerHTML = this._cantTalleres;
        
        let objTa={
            nombre: taller.nombre,
            fechaI: taller.fechaI,
            fechaF: taller.fechaF,
            lugaresD : taller.lugaresD,
            duracion : taller.duracion
        };
        this._talleres.push(objTa);
    }
    addTall(taller){
        this._addToTable(taller);
        localStorage.setItem("Talleres", JSON.stringify(this._talleres));
    }
}