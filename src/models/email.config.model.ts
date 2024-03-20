import { Schema, model } from "mongoose";

const schema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    delyQuota: {
        type: Number,
        value: 0
    },
    used: {
        type: Number,
        value: 0
    },
    serverType: {
        type: String,
    }
}, {
    timestamps: true
})

const EmailConfigModel = model("EmailConfig", schema);
export default EmailConfigModel