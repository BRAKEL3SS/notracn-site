const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema({
    user: {type: String, required: true},
    report: {type: String, required: true},
}, {
    timestamps: true
})

module.exports  = mongoose.model('Report', reportSchema)