import db from "../models/index.model.js";

const { ChatHistory } = db;

export const saveQuestionAndAnswerToChatHistory = async ({ username, historyObj }) => {
    try {
        let existingChatHistory = await ChatHistory.findOne({ username });

        if (!existingChatHistory) {
            existingChatHistory = new ChatHistory({
                username,
                history: [historyObj],
            });

            await existingChatHistory.save();
        } else {
            await ChatHistory.updateOne(
                { "username": username },
                {
                    "$push": { "history": { "$each": [historyObj], "$position": 0 } },
                    "$inc": { "historyCount": 1 }
                }
            );
        }
    } catch (error) {
        throw new Error(`Error saving question and answer to chat history: ${error.message}`);
    }
};
