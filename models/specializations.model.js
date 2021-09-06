const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const SpecializationSchema  = new Schema({
    name: String,
    specialtyId: String
});

module.exports = mongoose.model("Specialization", SpecializationSchema);