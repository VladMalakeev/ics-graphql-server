const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema  = new Schema({
    name: String,
    descriptionShort: String,
    descriptionFull: String,
    dateOfPublication: String,
    author: String,
    image: String
});

module.exports = mongoose.model("News", NewsSchema);