const AppointmentRepository = require('../Repository/appointment.repository')
const BaseController = require('./base.controller')

class AppointmentController extends BaseController{
    constructor(){
        super(AppointmentRepository)
    }
}

module.exports = AppointmentController