// Import function from Presentaciones Model
import { updatePresentacionesCuposDisponibles } from "../models/presentacionModel.js";
import { getPresentaciones, getPresentacionesById, insertPresentaciones, updatePresentacionesById, deletePresentacionesById, getPresentacionByInstId} from "../models/presentacionModel.js";
  
// Get All Presentacioness
export const showPresentaciones = (req, res) => {
    getPresentaciones((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get All Charlas By Inst ID
export const showPresentacionByInstId = (req, res) => {
    getPresentacionByInstId(req.params.id, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}
  
// Get Single Presentaciones 
export const showPresentacionesById = (req, res) => {
    getPresentacionesById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Presentaciones
export const createPresentaciones = (req, res) => {
    const data = req.body;
    insertPresentaciones(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Presentaciones
export const updatePresentaciones = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePresentacionesById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Presentaciones
export const updatePresentacionesCupos = (req, res) => {
    const cupo  = req.params.cupo;
    const id    = req.params.id;
    updatePresentacionesCuposDisponibles(cupo, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Presentaciones
export const deletePresentaciones = (req, res) => {
    const id = req.params.id;
    deletePresentacionesById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}