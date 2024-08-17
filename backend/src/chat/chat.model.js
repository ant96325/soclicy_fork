const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChatSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                // Regular expression for validating email
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format'
        }
    },
    content: String,
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

ChatSchema.static('getData', async function(){
    const list = await Chat.find()
    return list.map(item => { return {email: item.email, message: item.content} })
})

const Chat = mongoose.model('chat', ChatSchema);

module.exports = {
    Chat,
}