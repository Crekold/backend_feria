// Import function from Estudiante_Graduado Model
import { getEstudiante_Graduado, getEstudiante_GraduadoById, getEstudiante_GraduadoById_Charla, insertEstudiante_Graduado, updateEstudiante_GraduadoById, deleteEstudiante_GraduadoById } from "../models/Estudiante_GraduadoModel.js";  
// Get All Estudiante_Graduados
export const showEstudiante_Graduado = (req, res) => {
    getEstudiante_Graduado((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Estudiante_Graduado 
export const showEstudiante_GraduadoById = (req, res) => {
    getEstudiante_GraduadoById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  // Get Estudiante_Graduado by ID_Charla from ID_charlainscripcion
export const showEstudiante_GraduadoById_Charla = (req, res) => {
    getEstudiante_GraduadoById_Charla(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}
// Create New Estudiante_Graduado

export const createEstudiante_Graduado = (req, res) => {
    const data = req.body;
    insertEstudiante_Graduado(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Estudiante_Graduado
export const updateEstudiante_Graduado = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateEstudiante_GraduadoById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// Delete Estudiante_Graduado
export const deleteEstudiante_Graduado = (req, res) => {
    const id = req.params.id;
    deleteEstudiante_GraduadoById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}