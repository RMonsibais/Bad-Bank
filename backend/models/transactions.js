const mongoose = require('mongoose')

const { Schema, model, Types } = mongoose

const schema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: "users"
    }
})

module.exports = model("transactions", schema)