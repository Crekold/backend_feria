// import connection
import db from "../config/database.js";
  
// Get All Charlas
export const getCharlas = (result) => {
    db.query("SELECT instituciones.Nombre AS NombreInstitucion, charlas.Id_Charla, charlas.Nombre, charlas.Fecha, charlas.Hora, charlas.Cantidad_Cupos, charlas.Cupos_Disponibles, charlas.Instituciones_Id_institucion, charlas.URL_FotoCharla, charlas.Link, pagina_institucion.Color AS Color FROM charlas INNER JOIN instituciones ON charlas.Instituciones_Id_institucion = instituciones.Id_institucion LEFT JOIN pagina_institucion ON instituciones.Id_institucion = pagina_institucion.Instituciones_Id_institucion order by Charlas.Fecha, Charlas.Hora", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Charla by ID
export const getCharlasById = (id, result) => {
    db.query("SELECT * FROM Charlas WHERE Id_Charla = ? order by Fecha, Hora", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
// Get all charlas by ID Institution
export const getCharlasByInstId = (id, result) => {
    db.query("SELECT * FROM Charlas Where Instituciones_Id_institucion = ? order by Fecha, Hora", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

  
// Insert Charla to Database (se necesitará un id_institucion)
export const insertCharlas = (data, result) => {
    db.query("INSERT INTO Charlas SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Charla Cupos Disponibles to Database
export const updateCharlasCuposDisponibles = (cupo, id, result) => {
    db.query("UPDATE Charlas SET Cupos_Disponibles = ? WHERE Id_Charla = ?", [cupo , id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Charla to Database (igual se necesita id_institucion)
export const updateCharlasById = (data, id, result) => {
    db.query("UPDATE Charlas SET Nombre = ?, Fecha = ?, Hora = ?, Cantidad_Cupos = ?, Cupos_Disponibles = ? , URL_FotoCharla = ?,Descripcion = ? , Link= ? WHERE Id_Charla = ?", [data.Nombre, data.Fecha,data.Hora,data.Cantidad_Cupos,data.Cupos_Disponibles ,data.URL_FotoCharla,data.Descripcion,data.Link ,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Charla from Database
export const deleteCharlasById = (id, result) => {
    db.query("DELETE FROM Charlas WHERE Id_Charla = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
