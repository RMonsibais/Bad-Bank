const mongoose = require('mongoose')

const { Schema, model } = mongoose

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        virtuals: true
    }
})

schema.virtual("transactions", {
    ref: "transactions",
    localField: "_id",
    foreignField: "user",
    justOne: false
})

module.exports = model("users", schema)