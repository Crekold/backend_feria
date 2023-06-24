// import connection
import db from "../config/database.js";
  
// Get All Estudiante_Graduado
export const getEstudiante_Graduado = (result) => {
    db.query("SELECT * FROM Estudiante_Graduado", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Estudiante_Graduado by ID
export const getEstudiante_GraduadoById = (id, result) => {
    db.query("SELECT * FROM Estudiante_Graduado WHERE Id_EG = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
// Get Estudiante_Graduado by ID_Charla from ID_charlainscripcion
export const getEstudiante_GraduadoById_Charla = (id, result) => {
    db.query("SELECT * FROM Estudiante_Graduado AS a, InscripcionCharla AS b WHERE a.Id_EG = b.Estudiante_Graduado_Id_EG and b.Charlas_Id_Charlas = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}
  
// Insert Estudiante_Graduado to Database (se necesitará un id_institucion)
export const insertEstudiante_Graduado = (data, result) => {
    db.query("INSERT INTO Estudiante_Graduado SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  


// Update Estudiante_Graduado to Database (igual se necesita id_institucion)
export const updateEstudiante_GraduadoById = (data, id, result) => {
    db.query("UPDATE Estudiante_Graduado SET Nombre = ? WHERE Id_EG = ?", [data.Nombre, data.Fecha,data.Hora,data.Cantidad_Cupos,data.Cupos_Disponibles , id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Estudiante_Graduado from Database
export const deleteEstudiante_GraduadoById = (id, result) => {
    db.query("DELETE FROM Estudiante_Graduado WHERE Id_EG = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
