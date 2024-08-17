module.exports = {
    saveChat,
}

async function saveChat(req, res, next) {
    const {email, content} = req.body;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) 
        throw {code: '02', message: 'Invalid email address format!'}
    
}
