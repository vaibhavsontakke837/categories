const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Categories_Data")

module.exports=mongoose