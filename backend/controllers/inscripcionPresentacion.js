// Import function from InscripcionPresentacion Model
//import { updateInscripcionPresentacionCuposDisponibles } from "../models/inscripcionPresentacionModel.js";
import { getInscripcionPresentacion, getInscripcionPresentacionById, insertInscripcionPresentacion, updateInscripcionPresentacionById, deleteInscripcionPresentacionById } from "../models/inscripcionPresentacionModel.js";
  
// Get All InscripcionPresentacion
export const showInscripcionPresentacion = (req, res) => {
    getInscripcionPresentacion((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single InscripcionPresentacion 
export const showInscripcionPresentacionById = (req, res) => {
    getInscripcionPresentacionById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New InscripcionPresentacion
export const createInscripcionPresentacion = (req, res) => {
    const data = req.body;
    insertInscripcionPresentacion(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update InscripcionPresentacion
export const updateInscripcionPresentacion = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateInscripcionPresentacionById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete InscripcionPresentacion
export const deleteInscripcionPresentacion = (req, res) => {
    const id = req.params.id;
    deleteInscripcionPresentacionById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}