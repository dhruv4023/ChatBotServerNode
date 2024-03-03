import config from "../../config/config.js";
import { sendRequest } from "../../helpers/handle_request_axios.js";
import RESPONSE from "../../helpers/response.helper.js";
import { saveQuestionAndAnswerToChatHistory } from "../../services/chat.service.js";

const CHATBOT_API_END_POINT = config.micro_services.chatbot_api_end;

export const askQuestion = async (req, res) => {
    try {
        const { body: { question }, tokenData: { username } } = req;
        const data = JSON.stringify({ "query": question });
        const method = 'post';
        const url = `${CHATBOT_API_END_POINT}/ask`;
        const headers = {
            'Authorization': req.headers['authorization'],
            'Content-Type': 'application/json'
        };

        const response = await sendRequest(method, url, headers, data);
        await saveQuestionAndAnswerToChatHistory({ username, question, answer: response.data.result })
        RESPONSE.successMediator(res, response);
    } catch (error) {
        console.log(error)
        RESPONSE.errorMediator(res, error);
    }
};
