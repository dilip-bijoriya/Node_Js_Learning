import { Request, Response } from "express";
import EmailModel from "../models/email.model";

const email = async (req: Request, res: Response) => {
    try {
        const { sendTo, title, message, status, sendAt, error, emailConfigId } = req.body;
        if (!sendTo) return res.status(400).send({ error: true, message: "sendTo is required", response: null });
        if (!title) return res.status(400).send({ error: true, message: "title is required", response: null });
        if (!message) return res.status(400).send({ error: true, message: "message is required", response: null });
        if (!status) return res.status(400).send({ error: true, message: "status is required", response: null });
        const data = await EmailModel.create({ sendTo, title, message, status, sendAt, error, emailConfigId });

        return res.status(200).send({
            error: false,
            message: "email sent successfully",
            response: data
        });
    } catch (error: any) {
        return res.status(500).send({
            error: true,
            message: error.message,
            response: null
        })
    }
}

export default { email }