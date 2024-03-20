import { Router } from "express";
import { signIn, signUp } from "../components/authentication.component";
import { emailConfig } from "../components/email.config.component";

const main = Router();
main.post('/signUp', signUp);
main.post('/signIn', signIn);
main.post('/email-config', emailConfig)
export default main;