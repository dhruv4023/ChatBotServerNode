import db from "../../models/index.model.js";
import RESPONSE from "../../helpers/response.helper.js";
import { getPaginatedResponse } from "../../helpers/pagination.helper.js";

const { Chats } = db;

export const createChat = async (req, res) => {
    const { tokenData: { username }, body: { title, templateContext, collectionName } } = req;

    try {
        const chat = new Chats({
            username,
            title,
            templateContext,
            collectionName
        });

        const savedChat = await chat.save();
        return RESPONSE.success(res, 3000, savedChat);
    } catch (error) {
        return RESPONSE.error(res, 9000, 500, error);
    }
};

// Get paginated chats
export const getPaginatedChats = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const totalCount = await Chats.countDocuments();

        const chats = await Chats.find()
            .skip((page - 1) * limit)
            .limit(limit);

        const paginatedResponse = getPaginatedResponse(chats, page, limit, totalCount);
        return RESPONSE.success(res, 3001, paginatedResponse);
    } catch (error) {
        return RESPONSE.error(res, 9000, 500, error);
    }
};

// Get a chat by ID
export const getChatByCollectionName = async (req, res) => {
    const { collectionName } = req.params;
    try {
        const chat = await Chats.findOne({ collectionName });
        if (!chat) {
            return RESPONSE.error(res, 3003, 404);
        }
        return RESPONSE.success(res, 3002, chat);
    } catch (error) {
        return RESPONSE.error(res, 9000, 500, error);
    }
};

// Update a chat
export const updateChat = async (req, res) => {
    const { id } = req.params;
    const { title, templateContext, collectionName } = req.body;

    try {
        const updatedChat = await Chats.findByIdAndUpdate(id, {
            title,
            templateContext,
            collectionName
        }, { new: true });

        if (!updatedChat) {
            return RESPONSE.error(res, 3003, 404);
        }
        return RESPONSE.success(res, 3004, updatedChat);
    } catch (error) {
        return RESPONSE.error(res, 9000, 500, error);
    }
};

// Delete a chat
export const deleteChat = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedChat = await Chats.findByIdAndRemove(id);
        if (!deletedChat) {
            return RESPONSE.error(res, 3003, 404);
        }
        return RESPONSE.success(res, 3005);
    } catch (error) {
        return RESPONSE.error(res, 9000, 500, error);
    }
};
