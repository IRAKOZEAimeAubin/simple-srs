const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: [true, 'must provide an id'],
        trim: true,
        minlength: [5, 'id must be at least 5 character long'],
        maxlength: [5, 'id can not exceed 5 characters long']
    },
    firstName: {
        type: String,
        required: [true, 'must provide a first name'],
        trim: true,
        minlength: [2, 'first name must be at least 2 character long'],
        maxlength: [20, 'first name can not exceed 20 characters long']
    },
    lastName: {
        type: String,
        required: [true, 'must provide a last name'],
        trim: true,
        minlength: [2, 'last name must be at least 2 character long'],
        maxlength: [20, 'last name can not exceed 20 characters long']
    },
    age: {
        type: Number,
        required: [true, 'must provide an age'],
        min: [18, 'student must be at least 18 years old']
    },
    gender: {
        type: String,
        required: [true, 'must provide a gender'],
        trim: true,
        enum: { values: ['Male', 'Female'], message: '{VALUE} is not supported' }
    },
    academicYear: {
        type: Number,
        required: [true, 'must provide an academic year'],
        min: [1984, 'academic year can not be earlier than 1984']
    }
})

module.exports = mongoose.model('Student', StudentSchema)