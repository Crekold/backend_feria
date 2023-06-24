// import connection
import db from "../config/database.js";
  
// Get All InscripcionPresentacion
export const getInscripcionPresentacion = (result) => {
    db.query("SELECT * FROM InscripcionPresentacion", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Charla by ID
export const getInscripcionPresentacionById = (id, result) => {
    db.query("SELECT * FROM InscripcionPresentacion WHERE Id_ICharla = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Charla to Database (se necesitará un id_institucion)
export const insertInscripcionPresentacion = (data, result) => {
    db.query("INSERT INTO InscripcionPresentacion SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  


// Update Charla to Database (igual se necesita id_institucion)
export const updateInscripcionPresentacionById = (data, id, result) => {
    db.query("UPDATE InscripcionPresentacion SET Fecha = ? WHERE Id_ICharla = ?", [data.fecha,Id_Presentacion,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Charla from Database
export const deleteInscripcionPresentacionById = (id, result) => {
    db.query("DELETE FROM InscripcionPresentacion WHERE Id_ICharla = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
