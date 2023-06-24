// import connection
import db from "../config/database.js";
  
// Get All Presentaciones
export const getPresentaciones = (result) => {
    db.query("SELECT instituciones.Nombre AS NombreInstitucion,presentaciones.Id_Presentacion,presentaciones.Nombre,presentaciones.Fecha,presentaciones.Hora,presentaciones.Cantidad_Cupos,presentaciones.Cupos_Disponibles,presentaciones.Instituciones_Id_institucion,presentaciones.URL_FotoPresentacion FROM Presentaciones INNER JOIN instituciones ON presentaciones.Instituciones_Id_institucion = instituciones.Id_institucion order by presentaciones.Fecha, presentaciones.Hora", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Get all charlas by ID Institution
export const getPresentacionByInstId = (id, result) => {
    db.query("SELECT * FROM Presentaciones Where Instituciones_Id_institucion = ? order by presentaciones.Fecha, presentaciones.Hora", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}
// Get Single Presentaciones
export const getPresentacionesById = (id, result) => {
    db.query("SELECT * FROM Presentaciones WHERE id_Presentacion = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Presentaciones to Database    (se necesitara un id_institucion)
export const insertPresentaciones = (data, result) => {
    db.query("INSERT INTO Presentaciones SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Presentacion cupos disponibles to Database  //
export const updatePresentacionesCuposDisponibles = (cupo, id, result) => {
    db.query("UPDATE Presentaciones SET Cupos_Disponibles = ? WHERE id_Presentacion = ?", [cupo , id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Presentacion to Database  // igual se necesita id_institucion
export const updatePresentacionesById = (data, id, result) => {
    db.query("UPDATE Presentaciones SET Nombre = ?, Fecha = ?, Hora = ? , Cantidad_Cupos = ? , Cupos_Disponibles = ? WHERE id_Presentacion = ?", [data.Nombre, data.Fecha,data.Hora,data.Cantidad_Cupos,data.Cupos_Disponibles , id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Presentaciones to Database
export const deletePresentacionesById = (id, result) => {
    db.query("DELETE FROM Presentaciones WHERE id_Presentacion = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}