const MESSAGES = {
    // Chat history messages
    4000: "Chat history created successfully.",
    4001: "Chat history retrieved successfully.",
    4002: "Chat history not found.",
    4003: "Chat history updated successfully.",
    4004: "Chat history deleted successfully.",
    4005: "Question deleted successfully.",
    4006: "Question not found.",

    3000: "Chat created successfully.",
    3001: "Chats fetched successfully.",
    3002: "Chat fetched successfully.",
    3003: "Chat not found.",
    3004: "Chat updated successfully.",
    3005: "Chat deleted successfully.",
    3006: "Chat with this collectionName already exist.",

    // Authorization messages
    5001: 'Unauthorized - Admin access required',
    5002: 'Access denied - Unauthorized',
    5003: 'Your session expired! Please log in again',

    // General messages
    9999: 'Internal Server Error',
};

const getMessage = messageCode => {
    if (!isNaN(messageCode) && MESSAGES.hasOwnProperty(messageCode))
        return MESSAGES[messageCode];

    return messageCode;
};

export default getMessage;
