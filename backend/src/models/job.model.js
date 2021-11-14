const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    decription: {type: String, required:true},
    title: {type: String, required:true},
    image: {type: String, required:true},
    type: {type: String, required:true},
    publication_date: {type: String, required:true},
    id: {type: String, required:true},
    location: {type: String, required:true},
    level: {type: String, required:true},
    tags: {type: String, required:true},
    company: {type: Object, required: true }
})

module.exports = mongoose.model("job", jobSchema);