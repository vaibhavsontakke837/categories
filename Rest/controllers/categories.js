const StudentModel = require("../models/categories")

//post student Info

exports.createStudent = async (req, res) => {
  // console.log("In Controller")
  // console.log(req.body.email)

  try {
    const newUser = new StudentModel(req.body)
    res.status(201).json(await newUser.save())

  } catch (err) {
    res.status(500).json({ error: err })
  }
}


//get all student details
exports.getAllStudentInfo = async (req, res) => {
  try {

    const students = await StudentModel.find()
    res.status(200).json(students)

  } catch (err) {
    res.status(500).json({ error: err })
  }
}

//get Specified Student  Info
exports.getStudentInfo = async (req, res) => {
  try {
    const student = await StudentModel.find({ _id: req.params.userId })
    res.status(200).json(student)
  } catch (err) {
    res.status(500).json({ error: err })
  }s
}

//update Specified Student Info
exports.updateStudentInfo = (req, res) => {
  // const updateStudent = req.body
  // console.log(updateStudent)
  StudentModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, data) => {
    if (err) {
      res.status(500).json({ error: err })
    } else {
      res.status(200).json(data)
    }
  })
}

//delete Specified Student Info
exports.deleteStudentInfo = (req, res) => {         
  StudentModel.findOneAndDelete({ _id: req.params.userId }, (err, data) => {
    if (err) {
      res.status(500).json({ error: err })
    } else {
      res.status(200).json(data)
    }
  })
}
