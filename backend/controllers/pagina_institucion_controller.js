import {PaginaInstitucion} from '../models/pagina_institucion_model.js';
import {insertPaginaInstituciones} from '../models/pagina_institucion_model.js';
import {updatePaginaInstitucionesById} from '../models/pagina_institucion_model.js';
import {deletePaginaInstitucionesById} from '../models/pagina_institucion_model.js';

export const getPaginaInstitucionById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  PaginaInstitucion.findById(id, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error al obtener la información de la página de institución' });
    } else {
      res.status(200).json(result);
    }
  });
};  
export const createPaginaInstitucion = (req, res) => {
  const data = req.body;
  insertPaginaInstituciones(data, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}  
// Update Product
export const updatePahginaInstitucion= (req, res) => {
  const data  = req.body;
  const id    = req.params.id;
  updatePaginaInstitucionesById(data, id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}
// Delete Product
export const deletePaginaInstitucion = (req, res) => {
  const id = req.params.id;
  deletePaginaInstitucionesById(id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}
