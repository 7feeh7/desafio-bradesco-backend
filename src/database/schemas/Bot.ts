import mongoose, { Schema } from "mongoose";

const BotSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
});

export default mongoose.model("Bot", BotSchema);