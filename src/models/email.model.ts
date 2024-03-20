import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
    sendTo: [String],
    subject: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ["success", "failed", "pending"]
    },
    sendAt: {
        type: Date
    },
    error: {
        type: String
    },
    emailConfigId: {
        type: Schema.Types.ObjectId,
    }
}, {
    timestamps: true
})

const EmailModel = model('Email', schema);
export default EmailModel;