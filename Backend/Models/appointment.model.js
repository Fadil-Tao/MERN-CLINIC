const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;
const date = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});
const time = new Date().toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
});

const appointmentSchema = new Schema({
    _id:{type:objectId,auto:true,},
  _doctor: { type: String, required: true },
  _appDate: { type: String, required: true },
  _appTime: { type: String, required: true },
  _bookDate: { type: String, default: date, auto:true },
  _bookTime: { type: String, default: time , auto:true},
  _patient:{type:objectId, ref:'users'}
}, {
    versionKey:false
});
const appointment = mongoose.model('appointment',appointmentSchema)
module.exports = appointment;