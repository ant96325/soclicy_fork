const express = require('express')
const router = express.Router()
const { Chat } = require('./chat.model')
const service = require('./chat.service')
const validator = require('./chat.validator')

router.post('/chat', saveChat)

async function saveChat(req, res, next){
    try {
        await validator.saveChat(req, res);
        const result = await service.saveChat(req, res);
        res.json({ code: '00', result: result });
    } catch (err) {
        res.json(err);
    }
}

module.exports = router;