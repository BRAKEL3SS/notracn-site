const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    report: {type: String, required: true},
}, {
    timestamps: true
})

module.exports  = mongoose.model('Report', reportSchema)