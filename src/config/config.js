import dotenv from 'dotenv';
dotenv.config();

export default {
    // database details
    database: {
        db_url: process.env.DB_URL || "mongodb://127.0.0.1:27017",
        db_name: process.env.DB_NAME,
    },
    //  ssl Keys details
    certificate: {
        privkey: process.env.SERVER_KEY || 'path to priv key',
        fullchain: process.env.SERVER_CERT || 'path to fullchain key',
    },
    cloudinary: {
        name: process.env.CLOUDINARY_CLOUD_NAME,
        key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    },
    port: process.env.APP_PORT || 4040,
    protocol: process.env.PROTOCOL || 'http',
    app_base_url: process.env.APP_BASE_URL || 'http://localhost:4040/api/v1',
    app_project_path: process.env.APP_PROJECT_PATH || 'http://localhost:4040',
    node_env: process.env.NODE_ENV || 'development',
    origin_url_list: process.env.ORIGIN_URL_LIST || '[ "http://localhost:3000" ]',
    jwt_secret: process.env.JWT_SECRET,
    micro_services: {
        auth_api_end: process.env.AUTH_API_END,
        chatbot_api_end: process.env.LLM_CHAT_API_END,
    },
    HUGGINGFACEHUB_API_TOKEN: process.env.HUGGINGFACEHUB_API_TOKEN
};
