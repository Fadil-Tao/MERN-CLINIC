const express = require('express')
const router = express.Router()

const AppointmentController = require('../Controller/appointment.controller');
const protect = require('../Middlewares/protect');
const appointmentController = new AppointmentController();

router.get('/getAll', appointmentController.getAll)
router.get('/getById',appointmentController.getById)
router.post('/add',protect,appointmentController.add)
router.put('/update/:id',appointmentController.update)
router.delete('/delete/:id',protect,appointmentController.deleteById)

module.exports = router;