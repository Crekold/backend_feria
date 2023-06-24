import db from "../config/database.js";

// Modelo de 'PaginaInstitucion'
export const PaginaInstitucion = {
  findById: (id, callback) => {
    console.log('ID en findById:', id);
    const query = 'SELECT * FROM pagina_institucion WHERE Instituciones_Id_institucion = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.log('Error en la consulta:', err);
        callback(err, null);
      } else {
        console.log('Resultados de la consulta:', results);
        callback(null, results[0]);
      }
    });
  },
};    


// Insert Product to Database
export const insertPaginaInstituciones = (data, result) => {
  db.query("INSERT INTO pagina_institucion SET ?", [data], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}


// Update Product to Database
export const updatePaginaInstitucionesById = (data, id, result) => {
  db.query("UPDATE pagina_institucion SET Bienvenida = ?, Mision = ?, Logo = ? , Telefono = ?, Correo = ?, Direccion = ?, Facebook = ?, Twitter = ?, Instagram = ?, Linkedin = ?, BolsaTrabajo = ?, Color = ? WHERE Instituciones_Id_institucion = ?", [data.Bienvenida, data.Mision,data.Logo, data.Telefono, data.Correo, data.Direccion, data.Facebook, data.Twitter, data.Instagram, data.Linkedin, data.BolsaTrabajo,data.Color, id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}
export const deletePaginaInstitucionesById = (id, result) => {
  db.query("DELETE FROM pagina_institucion WHERE Instituciones_Id_institucion = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}


