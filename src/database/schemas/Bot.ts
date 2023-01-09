import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";

const BotSchema = new Schema({
    _id: {
        type: String,
        default: () => v4(),
        require: true
    },
    name: {
        type: String,
        require: true
    }
});

export default mongoose.model("Bot", BotSchema);