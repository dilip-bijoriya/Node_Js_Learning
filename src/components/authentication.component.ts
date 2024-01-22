import { Request, Response } from "express";
import UserModel from "../models/user.model";
import sendEmail from "../configs/email.config";
import EmailTemplate from "../templets/email.template";

const signUp = async (req: Request, res: Response) => {
    try {
        const { fname, lname, email, password } = req.body;
        if (!fname) return res.status(400).send({ error: true, message: "fname is required", response: null });
        if (!lname) return res.status(400).send({ error: true, message: "lname is required", response: null });
        if (!email) return res.status(400).send({ error: true, message: "email is required", response: null });
        if (!password) return res.status(400).send({ error: true, message: "password is required", response: null });

        let alreadyExists = await UserModel.findOne({ email });
        if (alreadyExists) return res.status(400).send({ error: true, message: "email already exists", response: null });

        const data = await UserModel.create({ fname, lname, email, password });

        return res.status(200).send({
            error: false,
            message: "sign up successfully",
            response: ""
        })
    } catch (error: any) {
        return res.status(500).send({
            error: true,
            message: error.message,
            response: null
        })
    }
}

const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email) return res.status(400).send({ error: false, message: "email is required", response: null });
        if (!password) return res.status(400).send({ error: false, message: "password is required", response: null });
        const data = await UserModel.findOne({ email, password });
        const userName = `${data?.fname} ${data?.lname}`
        sendEmail(data?.email, "Congratulations!", EmailTemplate(userName));
        return res.status(200).send({
            error: false,
            message: "login successfully",
            response: data
        })
    } catch (error: any) {
        res.status(500).send({
            error: true,
            message: error.message,
            response: null
        })
    }
}

export { signUp, signIn }