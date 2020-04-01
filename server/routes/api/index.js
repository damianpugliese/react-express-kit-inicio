const express = require('express');
const router = express.Router();

// Descomentar aquí y unificar en éste archivo todas las rutas generadas en la carpeta Api
// router.use(); 

// Borrar aquí
router.get('/', (req, res)=>{
    res.send('Importar todas las rutas de Api aquí');
})

module.exports = router;