const Student = require('../models/Student')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const createStudent = asyncWrapper(async (req, res) => {
        const student = await Student.create(req.body)
        res.status(201).json({ student })

})

const getAllStudents = asyncWrapper(async (req, res) => {
        const students = await Student.find({})
    res.status(200).json({ nbHits: students.length, students })
})

const getStudent = asyncWrapper(async (req, res, next) => {
        const { id: studentId } = req.params
        const student = await Student.findOne({ id: studentId })
        if (!student) {
            return next(createCustomError(`No student with id: ${studentId}`, 404))
        }
        res.status(200).json({ student })
})

const updateStudent = asyncWrapper(async (req, res) => {
        const { id: studentId } = req.params
        const student = await Student.findOneAndUpdate({ id: studentId }, req.body, {
            new: true,
            runValidators: true
        })
        if (!student) {
            return next(createCustomError(`No student with id: ${studentId}`, 404))
        }
        res.status(200).json({ student })
})

const deleteStudent = asyncWrapper(async (req, res) => {
        const { id: studentId } = req.params
        const student = await Student.findOneAndDelete({ id: studentId })
        if (!student) {
            return next(createCustomError(`No student with id: ${studentId}`, 404))
        }
        res.status(200).json({ student })
})

module.exports = {
    createStudent ,getAllStudents, getStudent, updateStudent, deleteStudent
}