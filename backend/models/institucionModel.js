// import connection
import db from "../config/database.js";
  
// Get All Products
export const getInstituciones = (result) => {
    db.query("SELECT * FROM instituciones", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product
export const getInstitucionesById = (id, result) => {
    db.query("SELECT * FROM instituciones WHERE id_institucion = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
export const insertInstituciones = (data, result) => {
    db.query("INSERT INTO instituciones SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Product to Database
export const updateInstitucionesById = (data, id, result) => {
    db.query("UPDATE instituciones SET nombre = ?, descripcion = ?, url_foto = ? , sector= ? WHERE id_institucion = ?", [data.Nombre, data.Descripcion,data.URL_Foto,data.Sector, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Product to Database
export const deleteInstitucionesById = (id, result) => {
    db.query("DELETE FROM instituciones WHERE id_institucion = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}