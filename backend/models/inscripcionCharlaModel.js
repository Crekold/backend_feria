// import connection
import db from "../config/database.js";
  
// Get All InscripcionCharla
export const getInscripcionCharla = (result) => {
    db.query("SELECT * FROM InscripcionCharla", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Charla by ID
export const getInscripcionCharlaById = (id, result) => {
    db.query("SELECT * FROM InscripcionCharla WHERE Id_ICharla = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Charla to Database (se necesitará un id_institucion)
export const insertInscripcionCharla = (data, result) => {
    db.query("INSERT INTO InscripcionCharla SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  

// Update Charla to Database (igual se necesita id_institucion)
export const updateInscripcionCharlaById = (data, id, result) => {
    db.query("UPDATE InscripcionCharla SET Fecha = ?, NombreZoom = ? WHERE Id_ICharla = ?", [data.Fecha,data.NombreZoom,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Charla from Database
export const deleteInscripcionCharlaById = (id, result) => {
    db.query("DELETE FROM InscripcionCharla WHERE Id_ICharla = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
