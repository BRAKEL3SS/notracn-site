module.exports = function(req, res, next) {
    // Status code of 401 is unatuhorized
    if (req.user) return res.status(401).json('Unauthorized')
    // or if ok
    next()
}