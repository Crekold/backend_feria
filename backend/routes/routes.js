// import express
import express from "express";
  
// import function from controller
import { createInstituciones, deleteInstituciones, showInstituciones, showInstitucionesById, updateInstituciones } from "../controllers/institucion.js";

import { showPresentaciones, showPresentacionesById, createPresentaciones, updatePresentaciones, updatePresentacionesCupos, deletePresentaciones, showPresentacionByInstId } from "../controllers/presentacion.js";
import { showCharlas, showCharlasById, createCharlas, updateCharlas, updateCharlasCupos, deleteCharlas,showCharlasByInstId} from "../controllers/charla.js";


import { showInscripcionPresentacion, showInscripcionPresentacionById, createInscripcionPresentacion, updateInscripcionPresentacion, deleteInscripcionPresentacion } from '../controllers/inscripcionPresentacion.js';
import { showInscripcionCharla, showInscripcionCharlaById, createInscripcionCharla, updateInscripcionCharla, deleteInscripcionCharla } from "../controllers/inscripcionCharla.js";
import chatGptController from "../chatGpt.controller.js";

import { 
  showEstudiante_Graduado, 
  showEstudiante_GraduadoById,
  showEstudiante_GraduadoById_Charla, 
  createEstudiante_Graduado, 
  updateEstudiante_Graduado, 
  deleteEstudiante_Graduado 
} from '../controllers/estudiante_graduado.js';
  
// import function from controller
// ... (otras importaciones de controladores)
import { getPaginaInstitucionById,createPaginaInstitucion,updatePahginaInstitucion, deletePaginaInstitucion } from '../controllers/pagina_institucion_controller.js'; 
import {createCuenta, loginCuenta} from '../controllers/cuenta.js';
import {showCantidad_Instituciones,showTopInstituciones,showCantidadTotalInscritos,showProximasCharlas} from '../controllers/dashboard.js';
// init express router
const router = express.Router();


//Instituciones


// obtener todas las instituciones
router.get('/instituciones', showInstituciones);
  
// Get Single instituciones
router.get('/instituciones/:id', showInstitucionesById);
  
// Create New instituciones
router.post('/instituciones', createInstituciones);
  
// Update instituciones
router.put('/instituciones/:id', updateInstituciones);
  
// Delete instituciones
router.delete('/instituciones/:id', deleteInstituciones);





//Presentaciones


// Obtener todas las presentaciones
router.get('/presentaciones', showPresentaciones);
  
// Obtener una presentación por ID
router.get('/presentaciones/:id', showPresentacionesById);
  
// Crear una nueva presentación
router.post('/presentaciones', createPresentaciones);
  
// Actualizar una presentación
router.put('/presentaciones/:id', updatePresentaciones);

// Actualizar los cupos disponibles de una presentación
router.put('/presentaciones/:id/cupos/:cupo', updatePresentacionesCupos);
  
// Eliminar una presentación
router.delete('/presentaciones/:id', deletePresentaciones);
router.get("/presentacion_inst/:id", showPresentacionByInstId); // Obtener las charlas de una Institucion



// Rutas para las Charlas
router.get("/charlas", showCharlas); // Obtener todas las Charlas
router.get("/charlas/:id", showCharlasById); // Obtener una Charla por ID
router.post("/charlas", createCharlas); // Crear una nueva Charla
router.put("/charlas/:id", updateCharlas); // Actualizar una Charla por ID
router.put("/charlas/:id/cupos/:cupo", updateCharlasCupos); // Actualizar el cupo de una Charla por ID
router.delete("/charlas/:id", deleteCharlas); // Eliminar una Charla por ID
router.get("/charla_inst/:id", showCharlasByInstId); // Obtener las charlas de una Institucion

// Rutas para Estudiante_Graduado
router.get('/estudiante_graduado', showEstudiante_Graduado);
router.get('/estudiante_graduado/:id', showEstudiante_GraduadoById);
router.post('/estudiante_graduado', createEstudiante_Graduado);
router.put('/estudiante_graduado/:id', updateEstudiante_Graduado);
router.delete('/estudiante_graduado/:id', deleteEstudiante_Graduado);

router.post('/chatbot', chatGptController.askToChatGpt);



// Rutas para InscripcionPresentacion
router.get('/inscripcion_presentacion', showInscripcionPresentacion);
router.get('/inscripcion_presentacion/:id', showInscripcionPresentacionById);
router.post('/inscripcion_presentacion', createInscripcionPresentacion);
router.put('/inscripcion_presentacion/:id', updateInscripcionPresentacion);
router.delete('/inscripcion_presentacion/:id', deleteInscripcionPresentacion);

// Rutas para InscripcionCharla
router.get("/inscripcionCharla", showInscripcionCharla);
router.get("/inscripcionCharla/:id", showInscripcionCharlaById);
router.post("/inscripcionCharla", createInscripcionCharla);
router.put("/inscripcionCharla/:id", updateInscripcionCharla);
router.delete("/inscripcionCharla/:id", deleteInscripcionCharla);

// Rutas para Pagina_Institucion
router.get('/pagina_institucion/:id', getPaginaInstitucionById);
router.post('/pagina_institucion/', createPaginaInstitucion);
router.put('/pagina_institucion/:id', updatePahginaInstitucion);
router.delete("/pagina_institucion/:id", deletePaginaInstitucion);



router.get('/notificacion_estudiantes/:id', showEstudiante_GraduadoById_Charla); //Seleccionando todos los estudiantes inscritos a una charla especifica


  
// Rutas para el dashboard
router.get("/cantidadInstituciones", showCantidad_Instituciones);
router.get("/topInstituciones", showTopInstituciones);
router.get("/totalInscritos", showCantidadTotalInscritos);
router.get("/proximasCharlas", showProximasCharlas);

router.post("/registro", createCuenta);
router.post('/login', loginCuenta);
// export default router
export default router;