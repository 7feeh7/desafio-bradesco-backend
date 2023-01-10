import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";

const MessagesSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    conversationId: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    text: {
        type: String,
    },
});

export default mongoose.model("message", MessagesSchema);