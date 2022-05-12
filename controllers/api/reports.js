const Report = require('../../models/report')

module.exports = {
    create,
    index
}
async function create(req, res) {
    try {
        const report = await Report.create(req.body)
        console.log(report)
        res.json(report)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function index(req, res) {
    const reports = await Report.find({})
    reports.sort((a,b) => a.timestamp.sortOrder - b.timestamp.sortOrder)
    res.json(reports)
}