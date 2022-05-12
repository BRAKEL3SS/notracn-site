const Report = require('../../models/report')

module.exports = {
    create,
    index
}
async function create(req, res) {
    try {
        const report = await Report.create(req.body)
        res.json(report)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const reports = await Report.find({})
        reports.sort((a,b) => b.createdAt - a.createdAt)
        console.log(reports.slice(0,3))
        res.json(reports.slice(0,3))
    } catch(err) {
        console.log(err)
        res.status(400).json(err) 
    }
}