import { getCantidad_Instituciones, getTopInstituciones, getCantidadTotalInscritos, getProximasCharlas } from '../models/dashboardModel.js';

export const showCantidad_Instituciones = (req, res) => {
    getCantidad_Instituciones((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showTopInstituciones = (req, res) => {
    getTopInstituciones((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showCantidadTotalInscritos = (req, res) => {
    getCantidadTotalInscritos((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showProximasCharlas = (req, res) => {
    getProximasCharlas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}