const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const ConsultationSchema  = new Schema({
    lecturerId: String,
    day: String,
    startTime: String,
    endTime: String,
    roomId: String
});

module.exports = mongoose.model("Consultation", ConsultationSchema);