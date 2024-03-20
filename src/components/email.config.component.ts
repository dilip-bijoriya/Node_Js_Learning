import { Request, Response } from "express";
import EmailConfigModel from "../models/email.config.model";

const emailConfig = async (req: Request, res: Response) => {
    try {
        const { email, password, delyQuota, used, serverType } = req.body;
        if (!email) return res.status(400).send({ error: true, message: "email is required", response: null });
        if (!password) return res.status(400).send({ error: true, message: "password is required", response: null });
        const data = await EmailConfigModel.create({ email, password, delyQuota, used, serverType });

        return res.status(200).send({
            error: false,
            message: "Email send successfully",
            response: data
        });
    } catch (error: any) {
        return res.status(500).send({
            error: true,
            message: error.message,
            response: null
        });
    }
}

export { emailConfig }