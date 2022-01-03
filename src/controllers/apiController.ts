import { Request, Response } from "express";
import { Sequelize } from "sequelize";
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
    let newPhrase = await Phrase.create({ author: author, txt: txt });
    res.json({ id: newPhrase.id, author, txt });
};

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();
    res.json( list );
}

export const getPhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let phrase = await Phrase.findByPk(id);
    if (!phrase) {
        res.json({ "error": "Frase não encontrada" });
    } else {
        res.json( phrase );
    }
}

export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);
    if (!phrase) {
        res.json({ "error": "Frase não encontrada" });
    } else {
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();
        res.json(phrase)
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let rows = await Phrase.destroy({ where: { id } })
    if (rows > 0) {
        res.json({ "success": `id: ${id}, deltado com sucesso` })
    } else {
        res.json({ "error": "Frase não encontrada" });
    }
}

export const randowPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [
            Sequelize.fn('RAND')
        ]
    });

    if (!phrase) {
        res.json({ "error": "Não há frases cadastradas" });
    } else {
        res.json(phrase);
    }
}