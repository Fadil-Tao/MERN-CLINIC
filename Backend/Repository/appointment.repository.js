const BaseRepository = require('./base.repository')
const appointment = require('../Models/appointment.model');

class AppointmentRepository extends BaseRepository{
    constructor(){
        super(appointment)
    }
}

module.exports = AppointmentRepository