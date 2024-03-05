import mongoose from 'mongoose';

const ChatHistorySchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        history: [{
            question: { type: String, required: true },
            answer: { type: String, required: true },
            collectionName: { type: String, required: true },
        }],
        historyCount: { type: Number, default: 0 } // Field to store the count of history array
    },
    { timestamps: true }
);

export default ChatHistorySchema