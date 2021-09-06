const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const DepartmentSchema  = new Schema({
    name: String,
    code: String,
    email: String,
    phoneNumber: String,
    logo: String,
    description: String,
    basicDiscipline: String,
    recommendedKnowledge: String,
    headOfDepartmentId: String,
    specialties:[{type:Schema.Types.ObjectId, ref:"Specialty"}]
});

module.exports = mongoose.model("Department", DepartmentSchema);