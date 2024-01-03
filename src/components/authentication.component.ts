import { Request, Response } from "express";
import fs from 'fs/promises';
const userFilePath = 'users.json';

interface User {
    name?: string;
    username?: string;
    password?: string;
}

const signup = async (req: Request, res: Response) => {
    try {
        let { name, username, password } = req.body;
        if (!name) return res.status(400).send({ error: true, message: "name is required", response: null });
        if (!username) return res.status(400).send({ error: true, message: "username is required", response: null });
        if (!password) return res.status(400).send({ error: true, message: "password is required", response: null });
        const users = await readUsersFile();
        if (users.find(user => user.username === username)) {
            return res.status(400).send({ error: true, message: 'Username already exists.', response: null });
        }

        users.push({ username, password });
        await writeUsersFile(users);

        return res.status(200).send({
            error: false,
            message: "user successfully created",
            response: users
        });
    } catch (error) {
        console.error(error);
    }
}

const readUsersFile = async (): Promise<User[]> => {
    try {
        const data = await fs.readFile(userFilePath, 'utf-8');
        console.log(data, "DATA");
        return JSON.parse(data) as User[];
    } catch (error) {
        if (error) {
            return [];
        }
        throw error;
    }
};

async function writeUsersFile(users: User[]): Promise<void> {
    await fs.writeFile(userFilePath, JSON.stringify(users, null, 2), 'utf-8');
}

const login = async (req: Request, res: Response) => {
    try {
        let { username, password } = req.body;
        if (!username) return res.status(400).send({ error: true, message: "username is requires", response: null });
        if (!password) return res.status(400).send({ error: true, message: "password is requires", response: null });

        const users = await readUsersFile();
        const user = users.find(u => u.username === username);

        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password.' });
        }

        return res.status(200).send({
            error: false,
            message: "login successfully",
            response: user
        });
    } catch (error) {
        console.error(error);
    }
}

export { signup, login };