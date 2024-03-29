const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const router = require('./routes')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))
app.use('/api', router)

mongoose.connect('mongodb://localhost/Note-API')
.then(() => {
    console.log('Connected to database!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
})
.catch(() => {
    console.log('Connection failed!')
})