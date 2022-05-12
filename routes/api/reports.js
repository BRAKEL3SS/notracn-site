const express = require('express')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const router = express.Router()
const reportsCtrl =  require('../../controllers/api/reports')

// Post api/users
router.post('/', reportsCtrl.create)
router.get('/index', reportsCtrl.index)

module.exports = router