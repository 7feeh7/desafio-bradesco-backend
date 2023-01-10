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
}, { 
    versionKey: false 
});

BotSchema.set('toJSON', {
    virtuals: true,
    transform: function(_, ret) { delete ret._id }
});

export default mongoose.model("Bot", BotSchema);