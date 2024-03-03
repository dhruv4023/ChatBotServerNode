import { getPaginatedResponse, getPaginationMetadata } from "../../helpers/pagination.helper.js";
import RESPONSE from "../../helpers/response.helper.js";
import db from "../../models/index.model.js"

const { ChatHistory } = db

// Delete operation
export const deleteChatHistory = async (req, res) => {
    try {
        const { params: { id } } = req;
        const deletedChatHistory = await ChatHistory.findByIdAndDelete(id);
        if (!deletedChatHistory) {
            return RESPONSE.error(res, 4002, 404);
        }
        return RESPONSE.success(res, 4004);
    } catch (error) {
        console.error('Error deleting chat history:', error);
        return RESPONSE.error(res, 9000, 500, error);
    }
};


// Controller function to get paginated chat history
export const getChatHistoryByUserId = async (req, res) => {
    try {
        const { tokenData: { username }, query: { page, limit } } = req;
        const { startIndex, endIndex } = getPaginationMetadata(req.query);

        // Find the chat history for the user
        const chatHistory = await ChatHistory.findOne({ username }, { history: { $slice: [startIndex, endIndex] } });

        if (!chatHistory) {
            return RESPONSE.error(res, 4103, 404); // Chat history not found
        }

        // Paginate the chat history

        // Send success response with paginated chat history
        RESPONSE.success(res, 4201, paginatedResponse);
    } catch (error) {
        // Handle any errors and send an error response
        console.error('Error getting chat history:', error);
        RESPONSE.error(res, 9000);
    }
};


