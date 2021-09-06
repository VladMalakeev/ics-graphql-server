const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const SemesterSchema  = new Schema({
    startDate: String,
    finishDate: String,
    startWeek: Number,
    firstModuleId: String,
    secondModuleId: String,
    sessionId: String,
    description: String 
});

module.exports = mongoose.model("Semester", SemesterSchema);