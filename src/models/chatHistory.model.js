import mongoose from 'mongoose';

const ChatHistorySchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        history: [{
            question: { type: String, required: true },
            answer: { type: String, required: true }
        }]
    },
    { timestamps: true }
);

// Define a virtual property to compute the length of the 'history' array
ChatHistorySchema.virtual('historyCount').get(function () {
    return this.history.length;
});

export default ChatHistorySchema