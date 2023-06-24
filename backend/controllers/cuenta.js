import bcrypt from 'bcrypt';
import { insertCuenta, getUserByCI } from '../models/cuentamodel.js';

// Create New Cuenta
export const createCuenta = async (req, res) => {
    const data = req.body;

    // Encripta la contraseña antes de guardarla
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedPassword;

    insertCuenta(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
};

// Login Cuenta

//-1 = usuario no encontrado
//0 = el password ingresado no es correcto 
//1 = el inicio de sesion se hizo de forma correcta

export const loginCuenta = async (req, res) => {
    const ci = req.body.ci;
    const password = req.body.password;

    // Busca al usuario en la base de datos
    const user = await getUserByCI(ci);
    if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado',data: -1 });
    }

    // Compara la contraseña proporcionada con la contraseña almacenada
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).send({ message: 'Contraseña incorrecta', data: 0 });
    }

    // Si las contraseñas coinciden, entonces el inicio de sesión fue exitoso
    res.status(200).send({ message: 'Inicio de sesión exitoso', data: 1 });

};

export const getCuenta = (req, res) => {
    const data = req.params.ci;
    getCuentaByCi(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}