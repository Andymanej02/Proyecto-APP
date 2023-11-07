const express = require('express');
const router = express.Router();

// Importa el controlador de servicios
const servicesController = require('../controllers/servicesController');

// Ruta para obtener todos los servicios
router.get('/services', servicesController.getAllServices);

// Ruta para obtener un servicio por ID
router.get('/services/:id', servicesController.getServiceById);

// Ruta para crear un nuevo servicio
router.post('/services', servicesController.createService);

// Ruta para actualizar un servicio por ID
router.put('/services/:id', servicesController.updateService);

// Ruta para eliminar un servicio por ID
router.delete('/services/:id', servicesController.deleteService);

module.exports = router;
