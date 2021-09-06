const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const SpecialtySchema  = new Schema({
    name: String,
    code: Number,
    departments:[{type:Schema.Types.ObjectId, ref:"Departments"}]
});

module.exports = mongoose.model("Specialty", SpecialtySchema);