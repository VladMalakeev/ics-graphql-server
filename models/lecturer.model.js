const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const LecturerSchema  = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    degreeId: String,
    description: String,
    image: String,
    email: String,
    phoneNumber: String
});

module.exports = mongoose.model("Lecturer", LecturerSchema);