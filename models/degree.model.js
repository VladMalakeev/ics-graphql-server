const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const DegreeSchema  = new Schema({
    name: String
});

module.exports = mongoose.model("Degree", DegreeSchema);