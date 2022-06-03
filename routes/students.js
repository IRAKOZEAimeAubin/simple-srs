const express = require('express')
const router = express.Router()

const { createStudent, getAllStudents, getStudent, updateStudent, deleteStudent } = require('../controllers/students')

router.route('/').get(getAllStudents).post(createStudent)
router.route('/:id').get(getStudent).patch(updateStudent).delete(deleteStudent)

module.exports = router