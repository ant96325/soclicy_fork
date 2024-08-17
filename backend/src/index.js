const express = require('express')
const router = express.Router()
const chat = require('./chat')

router.use('', chat)

module.exports = router;