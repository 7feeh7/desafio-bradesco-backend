import mongoose from "mongoose";

const Bot = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
});

export default mongoose.model("Bot", Bot);