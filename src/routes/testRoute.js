const express = require('express')
const router = express.Router()

router.route('/').get(function (req, res, next) {
    res.send({ 1: 'Hello world' })
})

module.exports = router
