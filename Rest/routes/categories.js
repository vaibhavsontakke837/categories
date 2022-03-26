const express=require("express")

const router = express.Router()



//send data to db
router.post("/",require("../controllers/categories").createStudent)

//get all student information
router.get("/",require("../controllers/categories").getAllStudentInfo)

//get specified Student information
router.get("/:userId",require("../controllers/categories").getStudentInfo)

//update Sepecidied student Info
router.put("/:userId",require("../controllers/categories").updateStudentInfo)

//delete Specified Student Info
router.delete("/:userId",require("../controllers/categories").deleteStudentInfo)

module.exports=router