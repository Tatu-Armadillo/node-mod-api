import { Request, Response } from "express";
import { Phrase } from "../models/Phrase";

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const random = (req: Request, res: Response) => {
    let random: number = Math.floor(Math.random() * 10);
    res.json({ number: random });
};

export const name = (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({ name: `Nome digitado no parametro = ${name}` })
};

export const createPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;
    console.log(author, txt);

    let newPhrase = await Phrase.create({ author: author, txt: txt });
    res.json({ id: newPhrase.id, author, txt });
};
