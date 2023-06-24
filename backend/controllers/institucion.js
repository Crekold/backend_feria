// Import function from Product Model
import { getInstituciones, getInstitucionesById, insertInstituciones, updateInstitucionesById, deleteInstitucionesById } from "../models/institucionModel.js";
  
// Get All Products
export const showInstituciones = (req, res) => {
    getInstituciones((err, results) => {
        if (err){
            res.send(err);
        }else{

            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');
            res.json(results);
        }
    });
}
  
// Get Single Product 
export const showInstitucionesById = (req, res) => {
    getInstitucionesById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Product
export const createInstituciones = (req, res) => {
    const data = req.body;
    insertInstituciones(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Product
export const updateInstituciones = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateInstitucionesById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Product
export const deleteInstituciones = (req, res) => {
    const id = req.params.id;
    deleteInstitucionesById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}