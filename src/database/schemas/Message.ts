import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";

const MessagesSchema = new Schema({
    id: {
        type: String,
        default: () => v4(),
        require: true
    },
    conversationId: {
        type: String,
        default: () => v4(),
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
        require: true
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
        require: true
    },
}, { versionKey: false });

MessagesSchema.set('toJSON', {
    virtuals: true,
    transform: function(_, ret) { delete ret._id }
});

export default mongoose.model("message", MessagesSchema);