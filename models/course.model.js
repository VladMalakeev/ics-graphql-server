const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema  = new Schema({
    number: String
});

module.exports = mongoose.model("Course", CourseSchema);