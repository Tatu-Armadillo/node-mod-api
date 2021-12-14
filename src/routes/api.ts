import { Router, Request, Response } from "express";

const router = Router();

router.get('/ping', (req: Request, res: Response) => {
    res.json({ pong: true })
});

router.get('/random', (req: Request, res: Response) => {
    let random: number = Math.floor(Math.random() * 10);
    res.json({ number: random })
});

router.get('/name/:name', (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({ name: `Nome digitado no parametro = ${name}` })
});

export default router;
