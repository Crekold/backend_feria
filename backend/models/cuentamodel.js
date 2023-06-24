import db from "../config/database.js";
import axios from 'axios';

export const insertCuenta = (data, result) => {
    const apiConfig = {
        method: 'post',
        url: 'https://app.lpz.ucb.edu.bo:4090/FeriaDelEmpleo/api/Feria/ValidarEstudiante',  // Reemplaza esto con la URL real de la API
        headers: {
            'Authorization': 'b88663d93826971e6a612fdc0a550f145d99cc67c6926e0b770ce0f80b506f3a00f9bda11ce5481a0d4839bdf47a2878', // Reemplaza esto con tu token real
            'Content-Type': 'application/json'
        },
        data: {
            "DocIdentidad": data.ci
        }
    };

    // Realizar la solicitud a la API de la universidad
    axios(apiConfig)
        .then(response => {
            const apiResult = response.data;

            data.sede = apiResult.Sedes;

            // Comprobar el resultado de la API
            if(apiResult.Result === "1") {
                // El estudiante está registrado, procede a la inserción en la base de datos
                db.query("INSERT INTO cuenta SET ?", [data], (err, results) => {
                    if(err) {
                        console.log(err);
                        result(err, null);
                    } else {
                        result(null,apiResult.Sedes);
                        //result(null, results);
                    }
                });
            } else {
                // El estudiante no está registrado, denegar la inserción
                result(new Error('La persona no se encuentra registrada en ninguna sede de la UCB.'), null);
            }
        })
        .catch(err => {
            console.log(err);
            result(err, null);
        });
}



export const getUserByCI = (ci) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM cuenta WHERE ci = ?", [ci], (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(results[0]); // Retorna el primer usuario que coincide
            }
        });
    });
}


