import db from "../config/database.js";

// Get cantidad isntituciones inscritas en la feria
export const getCantidad_Instituciones = (result) => {
    db.query("SELECT COUNT( instituciones.Id_institucion ) AS Cantidad_Instituciones FROM instituciones", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Get top 5 de las instituciones con charlas mas vistas 
export const getTopInstituciones = (result) => {
    db.query("SELECT instituciones.Nombre AS Nombre_Institucion, COUNT(inscripcioncharla.Charlas_Id_Charlas) AS CantidadInscritos, instituciones.URL_Foto FROM instituciones LEFT JOIN charlas ON instituciones.Id_institucion = charlas.Instituciones_Id_institucion LEFT JOIN inscripcioncharla ON charlas.Id_Charla = inscripcioncharla.Charlas_Id_Charlas GROUP BY instituciones.Id_institucion LIMIT 5    ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get cantidad de inscritos en todas las charlas
export const getCantidadTotalInscritos = (result) => {
    db.query("SELECT COUNT(inscripcioncharla.Id_ICharla) AS CantidadTotalInscritos FROM inscripcioncharla", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Get proximas 5 charlas y sus datos
export const getProximasCharlas = (result) => {
    db.query("SELECT charlas.Fecha AS Fecha, charlas.Nombre AS NombreCharla, instituciones.Nombre AS NombreInstitucion,  COUNT(inscripcioncharla.Id_ICharla) AS `CantidadInscritosCharla` FROM charlas LEFT JOIN inscripcioncharla ON charlas.Id_Charla = inscripcioncharla.Charlas_Id_Charlas INNER JOIN instituciones ON  charlas.Instituciones_Id_institucion = instituciones.Id_institucion WHERE charlas.Fecha > NOW() GROUP BY charlas.Id_Charla ORDER BY Fecha ASC, charlas.Hora ASC LIMIT 5", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
