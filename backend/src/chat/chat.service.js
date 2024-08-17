const {Chat} = require('./chat.model')

module.exports = {
    saveChat,
}

async function saveChat(req, res) {
    const parmas = req.body;
    const chat = new Chat({
        email: parmas.email,
        content: parmas.content
    })
    try{
        await chat.save();
    } catch(e) {
        throw {code: '03', message: e.message}
    }
    
    return chat
}
