require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require("./routes")

const {
    PORT = 3001,
    MONGODB_URI = "mongodb://localhost:27017/"
} = process.env

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.use(express.static("../frontend/build"))

mongoose.connect(MONGODB_URI + "badbank", () => {
    console.log("connected to database")
    app.listen(PORT, () => {
        console.log("Server listening on port " + PORT)
    })
})