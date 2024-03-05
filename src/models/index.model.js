import mongoose from "mongoose";
import config from "../config/config.js";

mongoose.set("strictQuery", true);

mongoose
    .connect(config.database.db_url, {
        dbName: config.database.db_name,
    })
    .then(() => {
        console.log("MongoDB database connected");
    })
    .catch((e) => {
        console.log("db not connected: ", e);
    });

import chatsModel from "./chats.model.js";
import chatHistoryModel from "./chat_history.model.js";


const db = {
    Chats: mongoose.model("Chats", chatsModel),
    ChatHistory: mongoose.model("ChatHistory", chatHistoryModel),
}

export default db