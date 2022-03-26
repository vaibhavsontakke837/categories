const express=require("express")
const app=express()
var cors = require('cors')  

app.use(cors()) //and this
const mongoose=require("./db")

app.use(express.json())

mongoose.connection.on("connected", (err) => {
    if (err) {
        console.error(err)
    }else{
        console.log("Connected to Mongo Db")
    }
})

//save data in db
app.use("/categories",require("./routes/categories"))


app.listen(5000,()=>{
    console.log("Server is Started on localhost 5000")
})