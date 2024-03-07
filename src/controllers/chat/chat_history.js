import { getPaginatedResponse } from "../../helpers/pagination.helper.js";
import RESPONSE from "../../helpers/response.helper.js";
import isValidData from "../../helpers/validation/data_validator.js";
import db from "../../models/index.model.js";

const { ChatHistory } = db;

export const deleteChatHistory = async (req, res) => {
    try {
        const { tokenData: { username } } = req;
        const deletedChatHistory = await ChatHistory.findByIdAndDelete({ username });

        if (!deletedChatHistory)
            return RESPONSE.error(res, 4002, 404);

        return RESPONSE.success(res, 4004);
    } catch (error) {
        console.error('Error deleting chat history:', error);
        return RESPONSE.error(res, 9000, 500, error);
    }
};

export const deleteQuestionFromHistory = async (req, res) => {
    const { tokenData: { username }, params: { id: questionId } } = req;
    try {
        const updateQuery = {
            $pull: { history: { _id: questionId } },
            $inc: { "historyCount": -1 }
        };

        const result = await ChatHistory.updateOne({ username }, updateQuery);

        if (result.matchedCount != 0)
            return RESPONSE.success(res, 4005);
        else
            return RESPONSE.error(res, 4006, 404);

    } catch (error) {
        console.error('Error:', error);
        return RESPONSE.error(res, 9000, 500, error);
    }
};

export const getChatHistoryByUserId = async (req, res) => {
    try {
        const { tokenData: { username }, query: { page, limit } } = req;

        // Validate query parameters
        const validationRules = {
            page: 'integer',
            limit: 'integer'
        };

        const validationErr = await isValidData({ page, limit }, validationRules);
        if (validationErr) {
            return RESPONSE.error(res, validationErr);
        }

        const startIndex = (parseInt(page) - 1) * parseInt(limit);

        const chatHistory = await ChatHistory.findOne({ username }, { history: { $slice: [startIndex, parseInt(limit)] } });

        if (!chatHistory)
            return RESPONSE.error(res, 4002, 404);

        const paginatedResponse = getPaginatedResponse(chatHistory.history, page, limit, chatHistory.historyCount);
        return RESPONSE.success(res, 4001, paginatedResponse);
    } catch (error) {
        console.error('Error getting chat history:', error);
        return RESPONSE.error(res, 9000);
    }
};
