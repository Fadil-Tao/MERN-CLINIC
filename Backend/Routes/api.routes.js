const express = require('express')
const router = express.Router()

router.use('/users',require('./users.routes'))
router.use('/appointment',require('./appointment.routes'))

module.exports = router