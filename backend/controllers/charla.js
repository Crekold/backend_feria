// Import function from Charlas Model
import { updateCharlasCuposDisponibles } from "../models/charlaModel.js";
import { getCharlas, getCharlasById, getCharlasByInstId, insertCharlas, updateCharlasById, deleteCharlasById } from "../models/charlaModel.js";  
// Get All Charlass
export const showCharlas = (req, res) => {
    getCharlas((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
//Get All Charlas By Inst ID
export const showCharlasByInstId = (req, res) => {
    getCharlasByInstId(req.params.id, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}
  
// Get Single Charlas 
export const showCharlasById = (req, res) => {
    getCharlasById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Charlas
export const createCharlas = (req, res) => {
    const data = req.body;
    insertCharlas(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Charlas
export const updateCharlas = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCharlasById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Charlas
export const updateCharlasCupos = (req, res) => {
    const cupo  = req.params.cupo;
    const id    = req.params.id;
    updateCharlasCuposDisponibles(cupo, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Charlas
export const deleteCharlas = (req, res) => {
    const id = req.params.id;
    deleteCharlasById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}