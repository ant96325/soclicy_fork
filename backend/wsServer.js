const WebSocket = require('ws')
const { Chat } = require('./src/chat/chat.model')
/**
 * @summary websocket setion
 */
async function service(server) {
    const wss = new WebSocket.Server({server})
    const chat_data = await Chat.getData()
    wss.on('connection', (socket) => {
        console.log('A client has connected')
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(chat_data));
            }
        });
        socket.on('message', (data) => {
            const {direction, email, message} = JSON.parse(data)
            const new_chat = new Chat({
                email: email,
                content: message 
            })
            new_chat.save().then(
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        Chat.getData().then(list =>{
                            client.send(JSON.stringify(list));
                        })
                        
                    }
                })
            ).catch(e => {
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({message: 'Saving failed'}));
                    }
                })
                console.log(e) 
            })
        })

        socket.on('disconnect', () => {
            console.log('Client disconnected')
        })
    })
}

module.exports = {
    service
}