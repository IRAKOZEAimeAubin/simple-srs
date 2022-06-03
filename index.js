const express = require('express')
const app = express()
const students = require('./routes/students')
const connectDB = require('./db/connect')
const bodyParser = require('body-parser')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()



app.use(bodyParser.json())

//routes
app.use('/api/v1/students', students)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()