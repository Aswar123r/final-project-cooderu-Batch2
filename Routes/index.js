const Router = require('express').Router()

const Auth = require('../Middleweres/Auth.middleware')
const User = require('./User.Router')
const Payment = require('./Payment.Router')
const Appointment = require('./Appointment.Router')
const Specialist = require('./Specialist.router')
const Doctor = require('./Doctor.router')

Router.use('/users', User)
Router.use('/specialists', Specialist)
Router.use('/doctors', Doctor)
Router.use('/appointment', Appointment)
Router.use('/payments', Payment)

module.exports = Router