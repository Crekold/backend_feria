// Import function from InscripcionCharla Model
//import { updateInscripcionCharlaCuposDisponibles } from "../models/inscripcionCharlaModel.js";
import { getInscripcionCharla, getInscripcionCharlaById, insertInscripcionCharla, updateInscripcionCharlaById, deleteInscripcionCharlaById } from "../models/inscripcionCharlaModel.js";
  
// Get All InscripcionCharla
export const showInscripcionCharla = (req, res) => {
    getInscripcionCharla((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single InscripcionCharla 
export const showInscripcionCharlaById = (req, res) => {
    getInscripcionCharlaById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New InscripcionCharla
export const createInscripcionCharla = (req, res) => {
    const data = req.body;
    insertInscripcionCharla(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update InscripcionCharla
export const updateInscripcionCharla = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateInscripcionCharlaById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// Delete InscripcionCharla
export const deleteInscripcionCharla = (req, res) => {
    const id = req.params.id;
    deleteInscripcionCharlaById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}