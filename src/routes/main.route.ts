import { Router } from "express";
import { signIn, signUp } from "../components/authentication.component";

const main = Router();
main.post('/signUp', signUp);
main.post('/signIn', signIn);
export default main;