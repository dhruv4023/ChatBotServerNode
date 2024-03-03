const MESSAGES = {
    // Chat history messages
    4000: "Chat history created successfully.",
    4001: "Chat history retrieved successfully.",
    4002: "Chat history not found.",
    4003: "Chat history updated successfully.",
    4004: "Chat history deleted successfully.",

    // Authorization messages
    5001: 'Unauthorized - Admin access required',
    5002: 'Access denied - Unauthorized',
    5003: 'Your session expired! Please log in again',

    // General messages
    9999: 'Internal Server Error',
};

const getMessage = messageCode => {

    if (isNaN(messageCode))
        return messageCode;

    return messageCode ? MESSAGES[messageCode] : '';
};

export default getMessage;