const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    task: String,
    taskDetails: String

})

module.exports = mongoose.model("categories_data", studentSchema)