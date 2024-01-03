import { Router } from "express";
import { login, signup } from "../components/authentication.component";

const main = Router();
main.post('/signUp', signup);
main.post('/signin', login);

export default main