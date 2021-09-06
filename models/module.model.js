const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const ModuleSchema  = new Schema({
    weekOfModuleStart: Number,
    weeekOfModuleEnd: Number,
    weekOfModuleStartDate: String,
    weekOfModuleEndDate: String
});

module.exports = mongoose.model("Module", ModuleSchema);