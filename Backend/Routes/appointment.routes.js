const express = require('express')
const router = express.Router()

const AppointmentController = require('../Controller/appointment.controller');
const protect = require('../Middlewares/protect');
const appointmentController = new AppointmentController();

router.get('/getAll',protect,appointmentController.getAll)
router.get('/getById',protect,appointmentController.getById)
router.get('/getByName/:id', protect,appointmentController.getByName)
router.post('/add',protect,appointmentController.addAppointment)
router.put('/update/:id',protect,appointmentController.update)
router.delete('/delete/:id',protect,appointmentController.deleteById)

module.exports = router;