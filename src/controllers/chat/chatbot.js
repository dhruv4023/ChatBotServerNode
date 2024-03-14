import config from "../../config/config.js";
import FormData from 'form-data';
import { sendRequest } from "../../helpers/handle_request_axios.js";
import RESPONSE from "../../helpers/response.helper.js";
import { saveQuestionAndAnswerToChatHistory } from "../../services/chat.service.js";
import isValidData from "../../helpers/validation/data_validator.js";

const CHATBOT_API_END_POINT = config.micro_services.chatbot_api_end;

export const createTmpChain = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            throw new Error('No files uploaded');
        }

        const formData = new FormData();

        // Append files to FormData
        req.files.forEach(file => {
            formData.append('files', file.buffer, {
                filename: file.originalname,
                contentType: file.mimetype,
            });
        });

        // Make request using Axios or your sendRequest function
        const response = await sendRequest('post', `${CHATBOT_API_END_POINT}/create/tmp/chain`, {
            'Authorization': req.headers['authorization'],
            ...formData.getHeaders() // Include FormData headers
        }, formData);

        RESPONSE.successMediator(res, response);
    } catch (error) {
        console.log(error);
        RESPONSE.errorMediator(res, error);
    }
};


export const askQuestion = async (req, res) => {

    const validationErr = await isValidData(req.body, {
        question: 'required|string',
        collectionName: 'string'
    });

    if (validationErr)
        return RESPONSE.error(res, validationErr);

    try {
        const { body: { question, collectionName }, tokenData: { username } } = req;
        const data = JSON.stringify({ "query": question, "chain_name": collectionName ? collectionName : username });
        const method = 'post';
        const url = `${CHATBOT_API_END_POINT}/ask`;
        const headers = {
            'Authorization': req.headers['authorization'],
            'Content-Type': 'application/json'
        };
        console.log(url)
        const response = await sendRequest(method, url, headers, data);
        // const response = { "status": 200, data: { "success": true, "data": "here is demo answer ........." } }
        console.log(response)
        await saveQuestionAndAnswerToChatHistory({ username, historyObj: { question, answer: response.data.data, collectionName } })
        RESPONSE.successMediator(res, response);
    } catch (error) {
        console.log(error)
        RESPONSE.errorMediator(res, error);
    }
};

