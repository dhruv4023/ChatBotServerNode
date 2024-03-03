import db from "../models/index.model.js";

const { ChatHistory } = db;

export const saveQuestionAndAnswerToChatHistory = async ({ username, question, answer }) => {
    try {
        let existingChatHistory = await ChatHistory.findOne({ username });

        if (!existingChatHistory) {
            existingChatHistory = new ChatHistory({
                username,
                history: [{ question, answer }]
            });

            await existingChatHistory.save();
        } else {
            await ChatHistory.updateOne(
                { "username": username },
                { "$push": { "history": { "$each": [{ question, answer }], "$position": 0 } } }
            );
        }
    } catch (error) {
        throw new Error(`Error saving question and answer to chat history: ${error.message}`);
    }
};
