import RESPONSE from "../../helpers/response.helper.js";

import config from '../../config/config.js';
import { sendRequest } from "../../helpers/handle_request_axios.js";

const AUTH_API_END = config.micro_services.auth_api_end;

export const sendOTPController = async (req, res) => {
    try {
        const response = await sendRequest('post', `${AUTH_API_END}/api/v1/mail/send-otp`, {
            'Content-Type': 'application/json',
        }, JSON.stringify(req.body));

        RESPONSE.successMediator(res, response);
    } catch (error) {
        console.log(error)
        RESPONSE.errorMediator(res, error);
    }
};
